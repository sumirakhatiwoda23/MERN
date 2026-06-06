import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Formik } from "formik"

export default function AddBlog() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Add a Blog</CardTitle>
        <CardDescription>
          Enter detail to add a blog
        </CardDescription>

      </CardHeader>
      <CardContent>



        <Formik
          initialValues={{
            title: '',
            detail: '',
            author: '',
            image: ''
          }}

          onSubmit={(val) => {

          }}

        >

          {({ handleChange, values, errors, touched, handleSubmit }) => (

            <form
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-6">


                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    value={values.title}
                    onChange={handleChange}
                    id="title"
                    type="text"
                    placeholder="hello title"

                  />
                  {touched.title && errors.title && <p className="text-red-500">{errors.title}</p>}
                </div>



              </div>


              <Button type="submit" className="w-full mt-5">
                Submit
              </Button>
            </form>

          )}

        </Formik>


      </CardContent>

    </Card>
  )
}