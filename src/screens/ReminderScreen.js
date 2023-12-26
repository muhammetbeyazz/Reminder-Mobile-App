import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, GestureResponderEvent, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const ReminderScreen = ({ navigation }) => {
    const navigateToHomeScreen = () => {
        navigation.navigate('Home'); // Make sure this matches the name in your stack navigator
    };
    // Resmin durumunu takip eden state (true ise aktif, false ise pasif)
    const [isActive, setIsActive] = useState(true);

    // Resme tıklandığında çağrılan fonksiyon
    const toggleImage = () => {
        setIsActive(!isActive); // Aktiflik durumunu değiştir
    };



    return (
        <View style={styles.homeScreen}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.backContainer} onPress={navigateToHomeScreen}>
                    <Text style={styles.headerTitle}>Kapat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuConatiner} >
                    <Image source={require("../assets/images/menu-icon.png")} style={styles.icons} />
                </TouchableOpacity>
            </View>


            <View style={styles.body}>

                <View style={styles.mainTitle}>
                    <Text style={styles.title}>Hatırlatıcı</Text>
                </View>

                <View style={styles.reminderListContainer}>
                    <View>

                        <TouchableOpacity onPress={toggleImage}>
                            <Image
                                source={isActive
                                    ? require("../assets/images/active-alarm.png")
                                    : require("../assets/images/passive-alarm.png")}
                            />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={{ color: "white", }}>Deneme</Text>
                    </View>
                </View>

            </View>


            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.addReminder}
                    onPress={navigateToHomeScreen}
                >
                    <Image source={require("../assets/images/back-icon-2.png")} style={styles.icons} />
                    <Text style={styles.footerText}>Anımsatıcılar</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};


const styles = StyleSheet.create({
    // Ana tasarım aşağıdaki gibidir. Tüm ekranlarımızın standart düzeni bu şekilde olacaktır.
    homeScreen: {
        flex: 1, // Tüm ekranı kaplar
        flexDirection: 'column', // Sütun düzeni
        backgroundColor: "#040404",

    },

    //Header Kısmının İçeriği
    header: {
        width: "100%",
        flex: 0.09,
        //height: 60, // Sabit yükseklik
        //alignItems: 'center', // İçerikleri yatay olarak ortalar
        justifyContent: 'center', // İçerikleri dikey olarak ortalar
        borderBottomWidth: 1, // Alt kenarlık genişliği
        borderBottomColor: '#e0e0e0', // Alt kenarlık rengi
    },
    menuConatiner: {
        height: 35,
        width: 35,
        alignItems: "center",
        justifyContent: 'center',
        position: "absolute",
        left: 355,
        //backgroundColor: "red",
    },
    backContainer: {
        width: 80,
        height: 28,
        alignItems: 'center', // İçerikleri yatay olarak ortalar
        justifyContent: 'center', // İçerikleri dikey olarak ortalar
        flexDirection: 'row',
        //backgroundColor: "red",
    },
    headerTitle: {
        height: 25,
        width: 55,
        fontSize: 15,
        color: "#5F45FF",
        textAlign: "center",
        textAlignVertical: "center",
        //backgroundColor: "white",
    },

    //Body Kısmının İçeriği
    body: {
        flex: 1, // Kalan alanı kaplar
        alignItems: 'center', // İçerikleri yatay olarak ortalar
        //justifyContent: 'center', // İçerikleri dikey olarak ortalar
    },

    mainTitle: {
        height: 55,
        width: "100%",
        justifyContent: "center",
        paddingLeft: 25,
        //backgroundColor: "red",
    },
    title: {
        width: "auto",
        height: 50,
        fontWeight: "bold",
        fontSize: 40,
        color: "#5F45FF",
        //backgroundColor: "gray",
    },
    reminderListContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: "white",
    },

    //Footer Kısmının içeriği

    footer: {
        flex: 0.12,
        //height: 100, // Sabit yükseklik
        backgroundColor: '#201D1D', // Arka plan rengi
        borderTopWidth: 1, // Üst kenarlık genişliği
        borderTopColor: '#e0e0e0', // Üst kenarlık rengi
        //justifyContent: 'center', // İçerikleri dikey olarak ortalar

    },
    addReminder: {
        width: 150,
        height: 35,
        alignItems: 'center', // İçerikleri yatay olarak ortalar
        justifyContent: 'center', // İçerikleri dikey olarak ortalar
        position: "absolute",
        left: 20,
        top: 13,
        flexDirection: 'row',
        //backgroundColor: "red",
    },
    footerText: {
        fontSize: 18,
        color: "#5F45FF",
        fontWeight: "bold",
        paddingLeft: 8,
        textAlign: "center",
        textAlignVertical: "center",
    },



    //Genel Stiller
    icons: {
        height: 26,
        width: 26,
        resizeMode: 'contain',

        //backgroundColor:"white"
    },

});


// Kırmızı ve gri alanlar bittikten sonra içeriği oluşturmadan her sayfayı standart bir şekilde iskeletini oluştur.
// Fazla yazı eklendiğinde bir view diğerinin üzerine bimemesi gerekiyor.


export default ReminderScreen;