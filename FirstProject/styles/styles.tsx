import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

    avatar: {
    position: 'absolute',
    borderRadius: 16,
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: '#F6F6F6',
    alignSelf: 'center',
  },
    
    addBtn: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF6C00',
  },
    
    

  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },
  
  container: {
    width: '100%',
    height: 549,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 92,
    paddingBottom: 80,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  
  title: {
    color: '#212121',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    letterSpacing: 0.3,
  },

  input: {
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    marginBottom: 16,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 15,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',

  },

   passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  showPasswordText: {
    position: 'absolute',
    top: -16,
    right: 16,
    color: '#1e90ff',
  },
  
  loginText: {
    fontFamily: 'Roboto-Regular',
    marginTop: 16,
    textAlign: 'center',
    color: '#1B4371',
  },

   button: {
    backgroundColor: '#FF6C00', // Основний колір фону кнопки
    paddingVertical: 16, // Внутрішній відступ
    paddingHorizontal: 32, // Внутрішній відступ
    borderRadius: 100, // Закруглення кутів
    marginTop: 43, // Відступ зверху
    alignItems: 'center', // Вирівнювання тексту по центру
  },
   
  buttonText: {
    color: '#ffffff', // Колір тексту
    fontSize: 16, // Розмір тексту
    fontFamily: 'Roboto-Regular', // Шрифт
  },


});
