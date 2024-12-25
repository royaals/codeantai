import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const UserDropdown = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full h-[40px]">
          <SelectValue placeholder="Utkarsh" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="royal">Royal</SelectItem>
            <SelectItem value="john">John Doe</SelectItem>
            <SelectItem value="jane">Jane Doe</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UserDropdown;
