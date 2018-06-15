import React from "react";
import axios from 'axios';
import _ from 'lodash';
import { Header, Search } from "semantic-ui-react";
import getResults from "./getResults";
import { proxy, key } from './searchConfig';

const recipeTitleStyle = {
  color: "#FF5252"
};

export default class SearchRecipes extends React.Component {
     state = {
          value: '',
          results: [],
          isLoading: false
     }
     componentWillMount() {
       this.resetComponent()
     }
    
     resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })
      
     handleResultSelect = (e, { result }) => this.setState({ value: result.title })

     handleSearchChange = (e, { value }) => {
       this.setState({ isLoading: true, value })

       setTimeout(() => {
         if (this.state.value.length < 1) return this.resetComponent()

         const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
         const isMatch = result => re.test(result.title)
         const source = getResults(value);
         console.log(source)
         source.then( data => {
            this.setState({
           isLoading: false,
           results: data
         })
         }) 
         async function getResults1(query) {
           try {
             const result = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
             const recipes = result.data.recipes;
             console.log(recipes)
             this.setState({
               isLoading: false,
               results: _.filter(recipes, isMatch),
             })
           } catch (error) {
             console.log(error);
           }

         }


      
       }, 300)
     }

  render() {
       console.log(this.state)
    const { isLoading, value, results } = this.state
    return (
      <div>
        <Header as="h2" style={recipeTitleStyle}>
          Search Recipes!{" "}
        </Header>
        <Search loading={isLoading}
          onResultSelect={this.handleResultSelect}
          onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
          results={results}
          value={value}
          {...this.props} />
      </div>
    );
  }
}


