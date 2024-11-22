import { createContext, useState } from "react";

const formPoemContext = createContext({poem: {}, updatePoem: {}})

import { ReactNode } from "react";

const FormPoemContext = ({children}: {children: ReactNode}) => {
    const [formPoem, setFormPoem] = useState({})

    const updateFormPoem = (id: string, value: string) => {
        setFormPoem((prev) => ({
            ...prev,
            [id]: value,
        }))
    }

    return (
        <formPoemContext.Provider value={{poem: formPoem, updatePoem: {updateFormPoem}}}>
        {children}
        </formPoemContext.Provider>
    )
}

export default FormPoemContext;