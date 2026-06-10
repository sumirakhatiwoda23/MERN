import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import { toast } from 'sonner';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useLanguageTranslateMutation } from '@/translate/translateApi';

const valSchema = Yup.object({
  from: Yup.string().required('Required'),
  to: Yup.string().required('Required'),
  query: Yup.string().required('Required'),
});

export default function Home() {
  const [translate, { isLoading, data }] =
    useLanguageTranslateMutation();

  console.log(data);

  return (
    <div>
      <Formik
        initialValues={{
          from: '',
          to: '',
          query: '',
        }}
        validationSchema={valSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await translate(values).unwrap();

            toast.success('Translation successful');
            resetForm();
          } catch (err) {
            console.error(err);
            toast.error('Something went wrong');
          }
        }}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          setFieldValue,
          handleSubmit,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg space-y-5"
          >
            {/* From Language */}
            <Select
              value={values.from}
              onValueChange={(value) => {
                setFieldValue('from', value);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select source language" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="gu">Gujarati</SelectItem>
                  <SelectItem value="ja">Japanese</SelectItem>
                  <SelectItem value="mi">Maori</SelectItem>
                  <SelectItem value="ne">Nepali</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {errors.from && touched.from && (
              <p className="text-red-600">{errors.from}</p>
            )}

            {/* Query */}
            <Input
              name="query"
              value={values.query}
              onChange={handleChange}
              placeholder="Enter text to translate"
            />

            {errors.query && touched.query && (
              <p className="text-red-600">{errors.query}</p>
            )}

            {/* To Language */}
            <Select
              value={values.to}
              onValueChange={(value) => {
                setFieldValue('to', value);
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select target language" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="gu">Gujarati</SelectItem>
                  <SelectItem value="ja">Japanese</SelectItem>
                  <SelectItem value="mi">Maori</SelectItem>
                  <SelectItem value="ne">Nepali</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {errors.to && touched.to && (
              <p className="text-red-600">{errors.to}</p>
            )}

            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : 'Translate'}
            </Button>

         
          </form>
        )}
      </Formik>

<div>

</div>
{data && <h1>{data.query} </h1>}
{ data && <h1> {data.translation} </h1>}


    </div>
  );
}