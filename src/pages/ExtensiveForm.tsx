import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  genderOption: string;
  yesNo: string;
};

export default function ExtensiveForm() {
  const dataRef = useRef<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    genderOption: "",
    yesNo: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const d = dataRef.current;
    alert(
      [
        `First Name: ${d.firstName}`,
        `Last Name: ${d.lastName}`,
        `Email: ${d.email}`,
        `Mobile number: ${d.mobile}`,
        `Gender: ${d.genderOption}`,
        `Yes/No: ${d.yesNo}`,
      ].join("\n"),
    );
  };

  const handleEdit = () => {
    dataRef.current = {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      genderOption: "",
      yesNo: "",
    };
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="w-full max-w-md">
        <Card className=" border-0  bg-gray-800">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-white text-center"> Example </div>

              <Input
                placeholder="First Name"
                onChange={(e) => (dataRef.current.firstName = e.target.value)}
              />

              <Input
                placeholder="Last Name"
                onChange={(e) => (dataRef.current.lastName = e.target.value)}
              />

              <Input
                placeholder="Email"
                onChange={(e) => (dataRef.current.email = e.target.value)}
              />

              <Input
                placeholder="Mobile number"
                onChange={(e) => (dataRef.current.mobile = e.target.value)}
              />

              <Select
                onValueChange={(value) =>
                  (dataRef.current.genderOption = value)
                }
              >
                <SelectTrigger className="w-45 text-white">
                  <SelectValue placeholder="Select a gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Genders</SelectLabel>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Label className="text-white">Do you like React?</Label>
              <RadioGroup
                onValueChange={(value) => (dataRef.current.yesNo = value)}
                className="grid w-full grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-2 text-white">
                  <RadioGroupItem
                    className="bg-amber-200"
                    value="yes"
                    id="yes"
                  />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <RadioGroupItem className="bg-amber-200" value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>

              <Button className="bg-red-400 text-white" type="submit">
                SUBMIT
              </Button>
              <Button type="button" onClick={handleEdit}>
                EDIT
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
