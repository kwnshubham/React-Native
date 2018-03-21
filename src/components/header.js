import React from 'react';
import { Text, View } from 'react-native';


//Make a component
const Header = (props) => {
    return (
        <View style={styles.viewStyle}> 
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>

    );
};

const styles = {
    textStyle: {
        fontSize: 20,
       
        
    },
    viewStyle:{
        backgroundColor:'#33B2FF',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        paddingTop:15,
        shadowColor:'#f5f5f5',
        shadowOffset:{width:0,height:20},
        shadowOpacity:1,
        elevation: 10,   
        position:'relative',                                                                                                                                                                                                                                                                                                                                                                                                                                                
      
    },
};

//****Make the components avail to other parts of App */
export default Header;