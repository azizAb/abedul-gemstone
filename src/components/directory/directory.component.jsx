import { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import labrador from '../content-img/Labrador.JPG';
import kecubung from '../content-img/Kecubung.JPG';
import topaz from '../content-img/Topaz.jpg';
import akik from '../content-img/batu_akik.jpg';
import permata from '../content-img/batu_permata.png';

class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'Labrador',
                    imageUrl: labrador,
                    id: 1,
                    linkUrl: 'labrador'
                },
                {
                    title: 'Kecubung',
                    imageUrl: kecubung,
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Topaz',
                    imageUrl: topaz,
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Batu Permata',
                    imageUrl: permata,
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Batu Akik',
                    imageUrl: akik,
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        };
    }

    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionsProps}) => (
                    <MenuItem key={id} {...otherSectionsProps}/>
                ))}
            </div>
        )
    }
};

export default Directory;