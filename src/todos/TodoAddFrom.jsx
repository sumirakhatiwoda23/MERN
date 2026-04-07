import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { Formik } from "formik";


export default function TodoAddFrom() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Add Some Todos</CardTitle>
        <CardDescription>
          Enter some details
        </CardDescription>

      </CardHeader>
      <CardContent>


        <Formik
          initialValues={{
            email: ''

          }}

          onSubmit={(val) => {
            console.log(val);

          }}
        >


          {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="m@example.com"

                  />
                </div>

              </div>
              <Button type="submit" className=" cursor-pointer mt-7 w-full">
                Submit
              </Button>
            </form>

          )}





        </Formik>


      </CardContent>

    </Card>
  )
}