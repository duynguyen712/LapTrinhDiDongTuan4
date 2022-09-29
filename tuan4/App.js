import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    

    <View style={[styles.container], {flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.images}>
        <Image style={styles.logo} source={require('./assets/sach_tich_phan.png')}/>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style= {{
            fontSize: '12px',
            fontWeight: 'bold',
            paddingTop: 10,
          }}>Nguyên hàm tích phân và ứng dụng</Text>

          <Text style= {{
            fontSize: '12px',
            fontWeight: 'bold',
          }}>Cung cấp bởi Tiki Trading</Text>

          <Text style= {{
            fontSize: '15px',
            color: 'red',
            fontWeight: 'bold',
            marginTop: '3px',
          }}>141.800 đ</Text>

          <Text style= {{
            textDecorationLine: 'line-through',
            marginTop: '3px',
          }}>141.800 đ</Text>

          <View style={{ flexDirection: 'row', marginTop: '3px'}}>
            <TouchableOpacity style={{
            height: '15px',
            width: '15px',
            backgroundColor: 'gray',
            alignItems: 'center'
            }}>-</TouchableOpacity>

            <Text style={{ paddingLeft: '5px' , paddingRight: '5px'}}>1</Text>

            <TouchableOpacity style={{
              height:'15px',
              width: '15px',
              backgroundColor: 'gray',
              alignItems: 'center',
            }}>+</TouchableOpacity>

            <Text style={{
              paddingLeft: '100px',
              fontWeight: '500',
              color: 'blue'
            }}>Mua sau</Text>

          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginLeft: 15}}>
        <Text style={{ fontWeight: '600' , fontSize: '12px'}}>Mã giảm giá đã lưu</Text>

        <Text style={{ 
          fontWeight: '600', 
          fontSize: '12px', 
          marginLeft: '20px', 
          color: 'blue' }}>Xem tại đây</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ 
          flexDirection: 'row',
          border: '1px solid black',
          padding: '10px',
          margin: '15px'
        }}>
          <view style={{
            width: '40px',
            backgroundColor: 'yellow',
            marginRight: '5px'
          }}/>

          <Text style={{
            fontSize: '15px',
            fontWeight: '600',
          }}>Mã giảm giá</Text>
        </View>

        <TouchableOpacity style={{
          backgroundColor: 'blue',
          border: '1px solid black',
          padding: '10px',
          margin: '15px',
        }}>
          <Text style={{
            fontSize: '15px',
            fontWeight: '600',
            color: 'white',
          }}>Áp dụng</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        height:15, width:'100%',backgroundColor:'lightgray',marginTop:30}}>
      </View>

      <View style = {{flexDirection: 'row'}}>
          <Text style ={{padding:'5px',marginLeft:'2px',fontWeight:'bold',fontSize:'12px'}}>Bạn có bỏ phiếu quà tặng Tiki/Got/Urbox?</Text>
          <Text style ={{padding:'5px',fontWeight:'bold',fontSize:'12px', color:'blue'}}>Nhập tại đây?</Text>
      </View>

      <View style={{
        height:15, width:'100%',backgroundColor:'lightgray',marginTop:15,
      }}></View>

      <View style = {{flexDirection: 'row'}}>
          <Text style ={{padding:'5px',fontWeight:'bold',fontSize:'15px'}}>Tạm tính</Text>
          <Text style ={{padding:'5px',marginLeft:170,fontWeight:'bold',fontSize:'15px', color:'red'}}>141.800 đ</Text>
      </View>

      <View style={{
        height:'40px', width:'100%',backgroundColor:'lightgray',marginTop:15,
      }}></View>

      <View style = {styles.view1}>
          <Text style ={{padding:'5px',fontWeight:'bold',fontSize:'15px',color:'gray'}}>Thành tiền</Text>
          <Text style ={{padding:'5px',marginLeft:150,fontWeight:'bold',fontSize:'15px', color:'red'}}>141.800 đ</Text>
      </View>

      <TouchableOpacity style ={{
          height:'40px',
          width:'250px',
          marginLeft:'50px',
          borderRadius: 3,
          backgroundColor:'#e53935', 
          alignItems: "center",
          justifyContent: "center",
      }}>
        <Text style ={{
          color:'white',
          fontSize:20,
          fontWeight:'bold',

        }}>TIẾN HÀNH ĐẶT HÀNH</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  images: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    height: 140,
    width: 110,
  },
  view1: {
    flexDirection: 'row',
    marginLeft:10,
  },
  view2:{
    width:200, height:50, border:'1px solid black',
  },
});