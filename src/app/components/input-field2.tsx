import { useField } from 'formik';

interface InputFieldProps {
  label?: string;
  name: string;
  children?: React.ReactNode;
  id?: string;
  as?: string;

  placeholder?: string;
  required?: boolean;
  type?: string;
}

export default function InputField({
  label,
  children,
  ...props
}: InputFieldProps) {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="mb-2 text-base text-gray-900"
        >
          {label}
        </label>
      )}

      {props.as === 'select' ? (
        <select
          {...field}
          {...props}
          className={`
            w-full h-11 px-3 pr-8 text-sm rounded border border-gray-300 shadow
            appearance-none bg-white
            bg-[url('/icons/symbol-defs.svg#icon-chevron-down']
            bg-no-repeat bg-[right_0.75rem_center]
            focus:outline-none focus:ring-2 focus:ring-blue-500
          `}
        >
          {children}
        </select>
      ) : (
        <input
          {...field}
          {...props}
          className={`
            w-full h-11 px-3 text-sm rounded border border-gray-300 shadow
            focus:outline-none focus:ring-2 focus:ring-blue-500
            
          `}
        />
      )}

      {meta.touched && meta.error && (
        <span className="text-red-500 text-xs mt-1">{meta.error}</span>
      )}
    </div>
  );
}
