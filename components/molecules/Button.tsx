import { StyleSheet, Text, View } from "react-native";

const Button = () => {
    return (
        <View>
            <View style={styles.Container}>
                <Text style={styles.TextButton}>Veja Mais</Text>
            </View>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    TextButton: {
        fontWeight: "bold",
        color: "#fff",
    },
    Container: {
        borderWidth: 0.4,
        borderColor: "#fff",
        borderRadius: 12,
        alignItems: "center",
        paddingVertical: 4,
    },
});
