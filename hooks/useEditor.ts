import { EditorContext } from "../contexts/EditorContext";
import { useContext } from 'react';

export const useEditor = () => {
    return useContext(EditorContext);
}