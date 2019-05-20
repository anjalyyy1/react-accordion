import React, { Component } from 'react';
import AccordionItem from '../accordionItems/accordionItem';
import "./accordion.css"
class Accordion extends Component {
	state = {  
		isOpen: ''
	}
	handleClick = (heading) => {
		this.setState((prevState)=> {
			console.log('kkk', prevState, heading);
			if(prevState === heading) {
				console.log('from if');
				return {
					isOpen: false
				}
			}
			
			else {
				console.log('from else')
				return {
					isOpen: true
				}
			}
		})
	}
	render() { 
		return ( 
				<div className="accordion">
					<h1>my new heading</h1>
					<AccordionItem 
					heading="Doggie" 
					handleClick={this.handleClick}
					isOpen={this.state.isOpen === "Doggie"} 
					description="Dog behavior is the internally coordinated responses (actions or inactions) of the domestic dog (individuals or groups) to internal and/or external stimuli"/>
					
					<AccordionItem 
					heading="Cat" 
					handleClick={this.handleClick}
					isOpen={this.state.isOpen === "Cat"} 
					description="The cat (Felis catus) is a small carnivorous mammal.[1] It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family"/>
					
					<AccordionItem 
					heading="Sparrow"
					handleClick={this.handleClick}
					isOpen={this.state.isOpen === "Sparrow"} 
					description="Sparrows are a family of small passerine birds. They are also known as true sparrows, or Old World sparrows, names also used for a particular genus of the family"/>
				</div>
		);
	}
}
 
export default Accordion;
