import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Label } from "./Typography";

type Field = {
  label: string;
  name: string;
  placeholder: string;
  type: "text" | "email" | "textarea";
};
type FormFieldProps = Field & (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>);

const controlClass = "w-full rounded-xl border border-line bg-paper px-4 py-3 text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/20";

export function FormField({ label, name, placeholder, type, ...props }: FormFieldProps) {
  const id = `contact-${name}`;
  return <div className="grid gap-2"><Label as="label" htmlFor={id} tone="default">{label}</Label>{type === "textarea" ? <textarea id={id} name={name} placeholder={placeholder} className={`${controlClass} min-h-32 resize-y`} rows={5} required {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)} /> : <input id={id} name={name} type={type} placeholder={placeholder} className={controlClass} required {...(props as InputHTMLAttributes<HTMLInputElement>)} />}</div>;
}
