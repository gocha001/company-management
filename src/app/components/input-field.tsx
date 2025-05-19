'use client';

import { Field, FieldAttributes } from 'formik';
import React from 'react';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Partial<Pick<FieldAttributes<string>, 'as'>> {
  label?: string;
  as?: string;
  children?: React.ReactNode;
}

export default function InputField({
  label,
  as = 'input',
  id,
  children,
  ...rest
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        as={as}
        // className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
        //       className={`
        //   w-full  h-full block
        //   px-3 pr-8
        //   relative z-20
        //   text-sm
        //   border border-gray-300 rounded
        //   shadow
        //   appearance-none
        //   bg-[url('/icons/chevron.svg')] bg-no-repeat bg-[right_0.75rem_center]
        //   focus:outline-none focus:ring-2 focus:ring-blue-500
        // `}
      />
      {children}
    </div>
  );
}
