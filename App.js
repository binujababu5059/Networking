import React,{Component} from "react";
import { View,Text,StyleSheet,ActivityIndicator,FlatList } from "react-native";
// import axios from "axios";

export default class Resources extends Component{
    constructor(){
        super();
        this.state={
            loader:false,
            DATA:[]
        }
    }
    getData(){
        this.setState({loader:true})
        fetch('https://api.sampleapis.com/coffee/hot')
        .then((response)=>response.json())
        .then((response)=>{
            if(response.length>0){
                this.setState({DATA:response})
            }
            this.setState({loader:false})
             console.log('your response is',response)
        })
        .catch((error)=>{
            this.setState({loader:false})
            console.log('error is',error)
        })
    }
    //  getAxiosData(){
        
    //      this.setState({loader:true})
    //      axios.get('https://api.sampleapis.com/coffee/hot')
    //      .then((response)=>{
    //          this.setState({loader:false})
    //          console.log('axios response',response)
    //          this.setState({DATA:response.data})

    //      })
    //      .catch((error)=>{
    //          this.setState({loader:false})
    //          console.log('axios error',error)
    //      })

    //  }
    componentDidMount(){
        
          // this.getAxiosData()
          this.getData()
    }
    render(){
        const renderitem=({item})=>(
            <View style={styles.item}>
                <Text style={styles.itemtxt}>{item.ingredients}</Text> 
                
                <Text> {item.symbol}</Text>
                <Text>{item.description}</Text>
                

            </View>
        )
        return(
            <View style={styles.container}>
                <ActivityIndicator size={'large'} color='black' animating={this.state.loader}>

                </ActivityIndicator>
                <Text style={styles.hometext}
                onPress={()=>this.getData()}>Resource page</Text>
                <FlatList style={{width:'95%',marginTop:10}}
                data={this.state.DATA}
                renderItem={renderitem} />

            </View>
        )
    }
}
const styles = StyleSheet.create({

    container:{

        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'gray',
    
    },
    hometext:{

        fontSize:20,
        fontWeight:'bold',
        color:'black'
        
    },
    item:{

        width:'100%',
        padding:10,
        backgroundColor:'white',
        elevation:4,
        marginBottom:10
    },
    itemtxt:{

        fontSize:16,
        fontWeight:'bold'
    }
})