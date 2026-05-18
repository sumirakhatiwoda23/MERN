import { Formik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "./todoSlice.js";
import { nanoid } from "@reduxjs/toolkit";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

import {
  Select,
  SelectLabel,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import { Switch } from "@/components/ui/switch";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Field,
  FieldGroup,
} from "@/components/ui/field";

const todoSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  gender: Yup.string()
    .required("Gender is required"),

  country: Yup.string()
    .required("Country is required"),

  message: Yup.string()
    .min(10, "Minimum 10 characters")
    .max(200, "Maximum 200 characters")
    .required("Message is required"),

  airplanemode: Yup.boolean(),

  habits: Yup.array()
    .min(1, "Select at least one habit"),

  // NOW IMAGE IS A STRING URL
  image: Yup.string()
    .required("Image is required"),
});

export default function TodoAddFrom() {
  const dispatch = useDispatch();
  const nav = useNavigate();

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
            email: "",
            gender: "",
            country: "",
            message: "",
            airplanemode: false,
            habits: [],
            image: "",
            imageReview: "",
          }}
          validationSchema={todoSchema}
          onSubmit={(val) => {
            console.log(val);

            dispatch(
              addTodo({
                ...val,
                id: nanoid(),
              })
            );

            nav(-1);
          }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">

                {/* EMAIL */}
                <div className="grid gap-2">
                  <Label htmlFor="email">
                    Email
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="m@example.com"
                  />

                  {errors.email &&
                    touched.email && (
                      <div className="text-red-500">
                        {errors.email}
                      </div>
                    )}
                </div>

                {/* GENDER */}
                <div className="grid gap-2">
                  <Label>
                    Select Your Gender
                  </Label>

                  <RadioGroup
                    value={values.gender}
                    onValueChange={(value) =>
                      setFieldValue(
                        "gender",
                        value
                      )
                    }
                    className="w-fit mt-2"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="male"
                        id="male"
                      />

                      <Label htmlFor="male">
                        Male
                      </Label>
                    </div>

                    <div className="flex items-center gap-3">
                      <RadioGroupItem
                        value="female"
                        id="female"
                      />

                      <Label htmlFor="female">
                        Female
                      </Label>
                    </div>
                  </RadioGroup>

                  {errors.gender &&
                    touched.gender && (
                      <div className="text-red-500">
                        {errors.gender}
                      </div>
                    )}
                </div>

                {/* COUNTRY */}
                <div className="grid gap-2">
                  <Label>
                    Select Your Country
                  </Label>

                  <Select
                    value={values.country}
                    onValueChange={(value) =>
                      setFieldValue(
                        "country",
                        value
                      )
                    }
                  >
                    <SelectTrigger className="w-full max-w-48">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>
                          Country
                        </SelectLabel>

                        <SelectItem value="nepal">
                          Nepal
                        </SelectItem>

                        <SelectItem value="india">
                          India
                        </SelectItem>

                        <SelectItem value="china">
                          China
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  {errors.country &&
                    touched.country && (
                      <div className="text-red-500">
                        {errors.country}
                      </div>
                    )}
                </div>

                {/* MESSAGE */}
                <div>
                  <Textarea
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                    placeholder="Type your message here."
                  />

                  {errors.message &&
                    touched.message && (
                      <div className="text-red-500">
                        {errors.message}
                      </div>
                    )}
                </div>

                {/* SWITCH */}
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={
                      values.airplanemode
                    }
                    onCheckedChange={(
                      checked
                    ) =>
                      setFieldValue(
                        "airplanemode",
                        checked
                      )
                    }
                    id="airplane-mode"
                  />

                  <Label htmlFor="airplane-mode">
                    Airplane Mode
                  </Label>
                </div>

                {/* HABITS */}
                <div>
                  <Label>
                    Select Your Habits
                  </Label>

                  <FieldGroup className="max-w-sm mt-4">

                    {/* DANCE */}
                    <Field orientation="horizontal">
                      <Checkbox
                        checked={values.habits.includes(
                          "Dance"
                        )}
                        onCheckedChange={(
                          checked
                        ) => {
                          if (checked) {
                            setFieldValue(
                              "habits",
                              [
                                ...values.habits,
                                "Dance",
                              ]
                            );
                          } else {
                            setFieldValue(
                              "habits",
                              values.habits.filter(
                                (item) =>
                                  item !==
                                  "Dance"
                              )
                            );
                          }
                        }}
                        id="dance"
                      />

                      <Label htmlFor="dance">
                        Dance
                      </Label>
                    </Field>

                    {/* SING */}
                    <Field orientation="horizontal">
                      <Checkbox
                        checked={values.habits.includes(
                          "Sing"
                        )}
                        onCheckedChange={(
                          checked
                        ) => {
                          if (checked) {
                            setFieldValue(
                              "habits",
                              [
                                ...values.habits,
                                "Sing",
                              ]
                            );
                          } else {
                            setFieldValue(
                              "habits",
                              values.habits.filter(
                                (item) =>
                                  item !==
                                  "Sing"
                              )
                            );
                          }
                        }}
                        id="sing"
                      />

                      <Label htmlFor="sing">
                        Sing
                      </Label>
                    </Field>
                  </FieldGroup>

                  {errors.habits &&
                    touched.habits && (
                      <div className="text-red-500">
                        {errors.habits}
                      </div>
                    )}
                </div>

                {/* IMAGE */}
                <div>
                  <Input
                    className="mb-4"
                    name="image"
                    type="file"
                    onChange={(e) => {
                      const file =
                        e.target.files[0];

                      if (!file) return;

                      const url =
                        URL.createObjectURL(
                          file
                        );

                      // preview
                      setFieldValue(
                        "imageReview",
                        url
                      );

                      // store URL only
                      setFieldValue(
                        "image",
                        url
                      );
                    }}
                  />

                  {values.imageReview && (
                    <img
                      src={
                        values.imageReview
                      }
                      alt="preview"
                      className="rounded-md w-32"
                    />
                  )}

                  {errors.image && (
                    <div className="text-red-500">
                      {errors.image}
                    </div>
                  )}
                </div>

                {/* DEBUG */}
                <pre className="text-xs">
                  {JSON.stringify(
                    errors,
                    null,
                    2
                  )}
                </pre>
              </div>

              <Button
                type="submit"
                className="mt-7 w-full"
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}