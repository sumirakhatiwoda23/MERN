import React from 'react'
import { useGetProductsQuery } from '../products/productApi'
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { base } from '@/app/mainApi';
import { EditIcon } from 'lucide-react';
import { useNavigate } from 'react-router';
import RemoveProduct from '../products/RemoveProduct';

export default function AdminPage() {

  const nav = useNavigate();

  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{error.data}</p>

  console.log(data);

  return (
    <div>

      <div className='flex justify-end'>
        <Button onClick={() => nav('/admin/form/add')}>Add Product</Button>
      </div>

      <div className='max-w-5xl mt-5'>
        <div className='[&>div]:rounded-sm [&>div]:border'>
          <Table>
            <TableHeader>
              <TableRow className='hover:bg-transparent'>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Edit</TableHead>
                <TableHead className='text-right'>Remove</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map(item => (
                <TableRow key={item._id}>
                  <TableCell>
                    <div className='flex items-center gap-3'>
                      <Avatar>
                        <AvatarImage src={`${base}/${item.image}`} alt={item.fallback} />
                        <AvatarFallback className='text-xs'>{item.fallback}</AvatarFallback>
                      </Avatar>
                      <div className='font-medium'>{item.title}</div>
                    </div>
                  </TableCell>
                  <TableCell>Rs.{item.price}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.brand}</TableCell>
                  <TableCell>
                    <Button 
                    onClick={() => nav(`/admin/form/edit/${item._id}`)}
                    
                    variant="outline">
                      <EditIcon />
                    </Button>
                  </TableCell>
                  <TableCell className='text-right'>
                    <RemoveProduct id={item._id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

      </div>
    </div>
  )
}