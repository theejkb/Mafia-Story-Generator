import { useState } from "react"
import { EditorContext } from "../contexts/EditorContext"

type EditorProviderProps = {
    children: React.ReactNode
}

export const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {

    const [backgroundColor, setBackgroundColor] = useState<string>("#161721")
    const [primaryColor, setPrimaryColor] = useState<string>("#d7350d")
    const [secondaryColor, setSecondaryColor] = useState<string>("#ffffff")


    return <EditorContext.Provider value={{ backgroundColor, setBackgroundColor, primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor }}>
        {children}
    </EditorContext.Provider>
}