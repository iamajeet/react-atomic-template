import React, { Component } from "react";
import styled from 'styled-components';
import Arrow from './arrow.svg'
import Link from './link'
const UL = styled.ul`
    list-style: none;
    list-style-type: none;
    list-style-image: none;
`;
const LI = styled.li`
`;
class Tree extends Component {
  
    render() {
        const { tree, id } = this.props;
        return (
            <>               
                <Link id={id} img={Arrow} name={tree.name} />
                <UL id={`children_${id}`} className="tree-close">{tree.children.map((tree,index) => {
                    return (
                    <LI key={index} id={id+'_'+index} className={(tree.children && tree.children.length > 0)? 'link-with-icon' : ''}>
                        {(tree.children && tree.children.length > 0) ? <Tree tree={tree} id={id+'_'+index}/> : <Link id={id+'_'+index} name={tree.name} /> }                     
                    </LI>
                    )
                })}</UL>
            </>
        )
    }
}

export default Tree;
