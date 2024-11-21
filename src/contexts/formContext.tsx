import { createContext } from "react";

const formPoemContext = createContext({poem: {}})

import { ReactNode } from "react";

const FormPoemContext = ({children}: {children: ReactNode}) => {
    const [formPoem, setFormPoem] = useState({})

    const updateFormPoem = (id, value) => {
        setFormPoem((prev) => ({
            ...prev,
            [id]: value,
        }))
    }

    return (
        <formPoemContext.Provider value={{poem: {}, }}>
        {children}
        </formPoemContext.Provider>
    )
}

export default FormPoemContext;