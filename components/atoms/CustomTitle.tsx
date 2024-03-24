import { Text } from "react-native";
import { StyleSheet } from "react-native";

interface TitleProps {
    title: string;
    fontSize: number;
}

const CustomTitle = ({ title, fontSize = 32 }: TitleProps) => {
    return <Text style={[styles.title, { fontSize: fontSize }]}>{title}</Text>;
};

const styles = StyleSheet.create({
    title: {
        // fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default CustomTitle;
