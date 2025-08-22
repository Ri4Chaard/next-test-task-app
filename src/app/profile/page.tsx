import { HeaderTitle } from "@/components/header-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputWithLabel } from "@/components/ui/input-with-label";

export default function Profile() {
  return (
    <div className="w-full h-full px-8 py-10 bg-[#F7F9FD] overflow-y-auto">
      <HeaderTitle title="Settings" />

      <div className="mt-[14px] flex flex-col gap-[14px]">
        <InputWithLabel
          inputLabel="Name"
          id="name"
          placeholder="Enter name"
          defaultValue={"User Random"}
        />

        <div className="flex flex-col gap-2">
          <InputWithLabel
            inputLabel="Password"
            id="password"
            placeholder="Enter password"
            type="password"
          />
          <span className="text-[12px] text-[#666666]">
            Your password is between 4 and 12 characters
          </span>
        </div>

        <Button className="max-w-full self-end md:max-w-[272px] w-full text-[12px]">
          Save
        </Button>
      </div>
    </div>
  );
}
