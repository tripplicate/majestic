import type { InputFieldProps } from '../InputField'

export interface DropdownMenuProps<T = unknown> extends InputFieldProps {
  options: T[]
  optionLabel?: keyof T extends never ? string : keyof T
}
