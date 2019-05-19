import React, { Component } from 'react';
import AccordionItem from '../accordionItems/accordionItem';
class Accordion extends Component {
	state = {  }
	render() { 
		return ( 
				<>
					<AccordionItem heading="Dog" description="Dog behavior is the internally coordinated responses (actions or inactions) of the domestic dog (individuals or groups) to internal and/or external stimuli"/>
					<AccordionItem heading="Cat" description="The cat (Felis catus) is a small carnivorous mammal.[1] It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family"/>
					<AccordionItem heading="Sparrow" description="Sparrows are a family of small passerine birds. They are also known as true sparrows, or Old World sparrows, names also used for a particular genus of the family"/>
				</>
		);
	}
}
 
export default Accordion;
