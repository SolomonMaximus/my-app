import { useState } from "react";
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

export default function ExtensiveForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [genderOption, setGenderOption] = useState("");
  const [yesNo, setYesNo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      [
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Email: ${email}`,
        `Mobile number: ${mobile}`,
        `Gender: ${genderOption}`,
        `Yes/No: ${yesNo}`,
      ].join("\n"),
    );
  };

  const handleEdit = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setGenderOption("-1");
    setYesNo("");
  };

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="w-full max-w-md">
        <Card className=" border-0  bg-gray-800">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <Input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />

              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                placeholder="Mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />

              <Select onValueChange={(value) => setGenderOption(value)}>
                <SelectTrigger className="w-45">
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
              <RadioGroup onValueChange={(value) => setYesNo(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>

              <Button className="bg-red-400" type="submit">
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
