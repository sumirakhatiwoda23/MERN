import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Formik } from "formik"

import * as Yup from 'yup';

import { useNavigate } from "react-router-dom"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner"
// import { useRegisterUserMutation } from "./authApi"



export const registerSchema = Yup.object({
  fullname: Yup.string().min(4, 'Fullname must be at least 4 characters').max(40, 'Fullname must be at most 40 characters').required('Fullname is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  image: Yup.mixed().test('file Type', 'Unsupported file', (val) => {
    return val && ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif'].includes(val.type)
  })
});


export default function UserProfile() {


  const nav = useNavigate();

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Update  your account</CardTitle>
        <CardDescription>
          Enter your details below to Update
        </CardDescription>
        
      </CardHeader>
      <CardContent>

        <Formik
          initialValues={{
            fullname: '',
            email: '',
            image: '',
            imageReview: ''
          }}
          onSubmit={async (val) => {
  
}}

          validationSchema={registerSchema}
        >

          {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">

                <div className="grid gap-2">
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input
                    name='fullname'
                    onChange={handleChange}
                    value={values.fullname}
                    id="fulllname"
                    type="text"
                    placeholder="fullname"

                  />
                  {errors.fullname && touched.fullname && <p className="text-destructive">{errors.fullname}</p>}
                </div>


                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    id="email"
                    type="email"
                    placeholder="m@example.com"

                  />
                  {errors.email && touched.email && <p className="text-destructive">{errors.email}</p>}
                </div>


                


                <div className="grid gap-2">
                  <Label htmlFor="image">Select Image</Label>
                  <Input
                    name='image'
                    onChange={(e) => {
                      const file = e.target.files[0];

                      setFieldValue('imageReview', URL.createObjectURL(file));
                      setFieldValue('image', file);

                    }}

                    type="file"
                    placeholder="image"

                  />
                  {values.imageReview && !errors.image && <img src={values.imageReview} alt={values.fullname} />}
                  {errors.image && touched.image && <p className="text-destructive">{errors.image}</p>}
                </div>


                {/* <Button
                  disabled={isLoading}
                  type="submit" className="w-full">
                  {isLoading ? <Spinner /> : 'Register'}
                </Button> */}




              </div>
            </form>

          )}
        </Formik>



      </CardContent>

    </Card>
  )
}