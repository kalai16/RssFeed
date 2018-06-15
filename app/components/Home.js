import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { SearchBar } from 'react-native-elements'

import { getFeed, navigate } from '../actions';
import Item from './Item';
import Card from './Card';
import CardSection from './CardSection';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      data: this.props.rssFeed,

    };
  }

  static propTypes = {
    rssFeed: PropTypes.object,
    navigate: PropTypes.func.isRequired,
    getFeed: PropTypes.func.isRequired,
  }

  static defaultProps = {
    rssFeed: null,
  }

  static keyExtractor(item) {
    return item.guid;
  }

  componentDidMount() {
    this.props.getFeed();
  }

  navigateTo(item) {
    this.props.navigate('Detail', item);
  }

  IsLoading = () => {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  handleSearch(text) {
    const formatQuery = text.toLowerCase();
    const FreshData = this.props.rssFeed.items.filter((item) => {
      const filteredList = item.title.toLowerCase()
      return filteredList.match(formatQuery)
    });
    //console.log(FreshData)

    if (!formatQuery || formatQuery === '') {
      this.setState({
        data: this.props.rssFeed
      })
    }

    this.setState({ searchTerm: text, data: FreshData })
    console.log(this.state.data)
  }


  renderItem = ({ item }) => {
    return (
      <Card>
        <CardSection>

          <View>
            <Image
              style={{ flex: 1, height: 150, width: 150, borderRadius: 10 }}
              source={{ uri: item.thumbnail }}
            />
          </View>

          <View style={styles.headFeedStyle}>
            <TouchableOpacity onPress={() => this.navigateTo(item)}>
              <Item containerStyle={{ flex: 1, height: 150, padding: 10 }}>
                <Text style={styles.titleFeedStyle}>{item.title} </Text>
                <Text style={styles.descFeedStyle}>{item.description}</Text>
              </Item>
            </TouchableOpacity >
            <Text style={styles.dateFeedStyle}>{item.pubDate}</Text>
          </View>

        </CardSection>
      </Card>
    );
  }

  renderHeader = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontFamily: 'sans-serif-condensed', padding: 5 }}>National Public Radio - Technology Feed</Text>
      </View>
    );
  }

  render() {
    //console.log("searchFeed", this.state.data)
    if (!this.props.rssFeed) {
      return this.IsLoading();
    }

    return (
      <ScrollView>
        <SearchBar
          onChangeText={this.handleSearch.bind(this)}
          lightTheme round
          placeholder={"Type Feed Title Here..."}
        />
        <FlatList
          ListHeaderComponent={this.renderHeader}
          data={this.state.data}
          keyExtractor={Home.keyExtractor}
          renderItem={this.renderItem}
          style={{ flex: 1 }}
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    rssFeed: state.rssFeed,
  });
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getFeed,
  navigate,
}, dispatch);

const styles = StyleSheet.create({
  dateFeedStyle: {
    color: '#3E206B',
    fontSize: 10,
  },

  descFeedStyle: {
    color: '#3a6480',
    fontSize: 11,
    fontFamily: 'sans-serif'
  },

  headFeedStyle: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 5
  },

  titleFeedStyle: {
    color: '#352749',
    fontSize: 16,
    fontFamily: 'sans-serif-condensed'
  },
  container: {
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

