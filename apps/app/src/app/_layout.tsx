import { Text } from "react-native";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Text>Layout</Text>
            {children}
        </>
    )
}