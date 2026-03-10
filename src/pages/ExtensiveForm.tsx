import { useCallback, useEffect, useRef, useState } from "react";
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
import { useDebounce } from "@/hooks/useDebounce";

export default function ExtensiveForm() {
  const [showForm, setShowForm] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    genderOption: "",
    yesNo: "",
  });

  const debouncedValues = useDebounce(values, 500);

  const loadEmailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      [
        `First Name: ${values.firstName}`,
        `Last Name: ${values.lastName}`,
        `Email: ${values.email}`,
        `Mobile number: ${values.mobile}`,
        `Gender: ${values.genderOption}`,
        `Yes/No: ${values.yesNo}`,
      ].join("\n"),
    );
  };

  const onLoad = useCallback(() => {
    if (loadEmailRef.current && loadEmailRef.current.value) {
      const localStorageValue = localStorage.getItem(
        loadEmailRef.current.value,
      );

      if (localStorageValue) {
        const parsedLocalStorageValue = JSON.parse(localStorageValue);

        setValues(parsedLocalStorageValue);
        setShowForm(true);
        loadEmailRef.current.value = "";
      } else {
        window.alert("Email not found");
      }
    }
  }, []);

  const onCreateNew = useCallback(() => {
    if (loadEmailRef.current && loadEmailRef.current.value) {
      setValues({
        firstName: "",
        lastName: "",
        email: loadEmailRef.current.value,
        mobile: "",
        genderOption: "",
        yesNo: "",
      });

      setShowForm(true);
      loadEmailRef.current.value = "";
    }
  }, []);
  useEffect(() => {
    if (!showForm || !debouncedValues.email) return;

    localStorage.setItem(
      debouncedValues.email,
      JSON.stringify(debouncedValues),
    );
  }, [debouncedValues, showForm]);

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center">
      {!showForm && (
        <div className="w-full max-w-md">
          <Card className="border-0 bg-gray-800">
            <CardContent className="p-6 space-y-6">
              <div className="text-white text-center">Example</div>

              <Input ref={loadEmailRef} placeholder="Email" />

              <div className="flex gap-4">
                <Button type="button" onClick={onLoad}>
                  Load
                </Button>

                <Button type="button" onClick={onCreateNew}>
                  Create New
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {showForm && (
        <div className="w-full max-w-md">
          <Card className="border-0 bg-gray-800">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-white text-center">Example</div>

                <Input
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                />

                <Input
                  placeholder="Last Name"
                  value={values.lastName}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                />

                <Input placeholder="Email" value={values.email} disabled />

                <Input
                  placeholder="Mobile number"
                  value={values.mobile}
                  onChange={(e) =>
                    setValues((prev) => ({
                      ...prev,
                      mobile: e.target.value,
                    }))
                  }
                />

                <Select
                  value={values.genderOption}
                  onValueChange={(value) =>
                    setValues((prev) => ({
                      ...prev,
                      genderOption: value,
                    }))
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
                  value={values.yesNo}
                  onValueChange={(value) =>
                    setValues((prev) => ({
                      ...prev,
                      yesNo: value,
                    }))
                  }
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
                    <RadioGroupItem
                      className="bg-amber-200"
                      value="no"
                      id="no"
                    />
                    <Label htmlFor="no">No</Label>
                  </div>
                </RadioGroup>

                <Button className="bg-red-400 text-white" type="submit">
                  SUBMIT
                </Button>

                <Button
                  type="button"
                  onClick={() =>
                    setValues({
                      firstName: "",
                      lastName: "",
                      email: values.email,
                      mobile: "",
                      genderOption: "",
                      yesNo: "",
                    })
                  }
                >
                  EDIT
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
