import React, { useState } from 'react';
import { Image } from 'expo-image';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Dimensions 
} from 'react-native';

const { width, height } = Dimensions.get('window');

type StepType = {
    message: string;
    gif: any;
};

// Colores para los mensajes cuando se presiona "No"
const messageColors = ['#008000', '#000000', '#87CEEB', '#808080', '#800000'];

const ValentineApp = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [showFinalYes, setShowFinalYes] = useState<boolean>(false);
    
    const steps: StepType[] = [
        {
            message: "¿Quieres ser mi San Valentín vv? 💌",
            gif: require('./assets/cisne.gif')
        },
        {
            message: "¿Segura vv? 😢",
            gif: require('./assets/cordero.gif')
        },
        {
            message: "¿En serio me harás esto mami? 💔",
            gif: require('./assets/conejo.gif')
        },
        {
            message: "¡Piénsalo de nuevo vve! 🥺",
            gif: require('./assets/gato.gif')
        },
        {
            message: "¡Ahora si amor! 😊",
            gif: require('./assets/perro.gif')
        }
    ];

    const handleNo = () => {
        if (currentStep < 4) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleYes = () => {
        setShowFinalYes(true);
    };

    const resetApp = () => {
        setShowFinalYes(false);
        setCurrentStep(0);
    };

    if (showFinalYes) {
        return (
            <View style={styles.container}>
                <Text style={styles.congratsText}>¡Sabia que si amor!💖                        para tu proximo regalo escibreme:"cartas de por vida"</Text>
                <Image
                    source={require('./assets/final.gif')}
                    style={styles.gif}
                    contentFit="contain"
                    />

                <Text style={styles.message}>¡Feliz San Valentín mami! 🥰</Text>
                <TouchableOpacity
                    style={styles.volverButton}
                    onPress={resetApp}>
                    <Text style={styles.volverButtonText}>Volver al inicio</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image
                source={steps[currentStep].gif}
                style={styles.gif}
                contentFit="contain"
                />


            
            <Text style={[styles.title, { color: messageColors[currentStep] }]}>
                {steps[currentStep].message}
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.yesButton]}
                    onPress={handleYes}>
                    <Text style={styles.buttonText}>Sí 💖</Text>
                </TouchableOpacity>

                {currentStep < 4 && (
                    <TouchableOpacity
                        style={[styles.button, styles.noButton]}
                        onPress={handleNo}>
                        <Text style={styles.buttonText}>No 😢</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffe6f2',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 30,
        textShadowColor: 'rgba(0,0,0,0.1)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        minWidth: 120,
    },
    yesButton: {
        backgroundColor: '#ff66b3',
    },
    noButton: {
        backgroundColor: '#ff9999',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    gif: {
        width: width * 0.95,
        height: height * 0.5,
        marginVertical: 10,
    },
    congratsText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff0066',
        marginBottom: 20,
    },
    message: {
        fontSize: 20,
        color: '#cc0066',
        marginTop: 20,
        textAlign: 'center',
    },
    volverButton: {
        backgroundColor: '#ff66b3',
        padding: 15,
        borderRadius: 25,
        marginTop: 20,
    },
    volverButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ValentineApp;