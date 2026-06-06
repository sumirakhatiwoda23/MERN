import { useGetBlogsQuery } from '@/blogs/blogApi'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Formik } from 'formik';
import React from 'react'
import { useSearchParams } from 'react-router';

export default function Home() {

  const[searchParams,setSearchParams]=useSearchParams();

   const queryObj=searchParams.get('search')===null?{}:{
    search: searchParams.get('search')
   }

  const {data,isLoading,error}=useGetBlogsQuery(queryObj);
  

console.log(searchParams.get('search'))

  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1 className='text-red-500'>{error.message || error.error}</h1>
 
  return (
    <div>


<div>

<Formik
initialValues={{
  search:''
}}
onSubmit={(val)=>{

setSearchParams({search:val.search})

}}
>
{({handleChange,values,handleSubmit})=>(
  <form 
  
  className='max-w-lg mb-3'
  onSubmit={handleSubmit}
  
  >

<Input 

value={values.search}
onChange={handleChange('search')}
placeholder ="search"/>

  </form>
)}


</Formik>




</div>




      
{
  data && data.map((blog)=>{
    return <div key={blog.id}>
      <h1>{blog.title}</h1>
      <p>{blog.detail}</p>

    </div>
  })
}

    </div>
  )
}
