import React from 'react';
import SideSwipe from 'react-native-sideswipe';
import {View, Text, Image, ScrollView} from 'react-native';
import CarouselCard from './CarouselCard';

export default class HomeCarousel extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }

  render () {
    return (
      <View style={{height: 130}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CarouselCard onPress = {this.props.onPress} pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='Lol World Championship 2018'/>
            <CarouselCard pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='Innovation Project'/>
            <CarouselCard pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='yada yada'/>
            <CarouselCard pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='etc'/>
            <CarouselCard pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='Lorem Ipsum'/>
            <CarouselCard pic='https://i.ytimg.com/vi/4eoM26ZmHd0/maxresdefault.jpg' title='Donor si amet'/>
        </ScrollView>
      </View>
    );
  }
}
