import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

import Tree from './tree';
import Link from './link'
import './tree.css';

const DIV = styled.div`
    max-width: 100%;
    overflow: auto;
    font: 12px Verdana, sans-serif;
`;
const UL = styled.ul`
    list-style: none;
    list-style-type: none;
    list-style-image: none;
`;
const LI = styled.li`
    margin-left: 0;
    margin-right: 0;
`;

class TreeView extends Component {
    static propTypes = {
        treeData: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            children: PropTypes.array
        })
        ).isRequired,
        onExpandedNode: PropTypes.func,
        onSelectedNode: PropTypes.func,
    };

    static defaultProps = {
        expandAll: true,
        collapseAll: true,
        search: false,
        onExpandedNode: () => undefined,
        onSelectedNode: () => undefined
    };

    getId = id => {
        if(!id) return false;
        id = id.split('_');
        id.shift();
        return id.join('_');
    }

    updateClassOnNode = element => {
        if(element.classList){					
            element.classList.toggle('tree-open');
        } else {
            let classes = element.className.split(' ');
            let i = classes.indexOf('tree-open');
            if (i >= 0) 
                classes.splice(i, 1);
            else 
                classes.push('tree-open');
                element.className = classes.join(' '); 
        }
    }

    getTargetNode = async(event) => {
        const categoryId = this.getId(event.target.id),
        element = document.getElementById(`children_${categoryId}`);
        if(element){            
            this.rotate(event.target,event.target.nodeName);
            this.updateClassOnNode(element);
            this.props.onExpandedNode({categoryId,name:event.target.alt})
        }else{
            this.props.onSelectedNode({categoryId,name:event.target.textContent})
        }	
    }
    
    rotate = (node,nodeName) => {
        if(nodeName === 'IMG') {
            node.classList.toggle('rotate');
        }else{
            if(node.previousSibling.nodeName === 'IMG'){
                node.previousSibling.classList.toggle('rotate')
            }
        }
    }

    render() {
        const { treeData } = this.props;
        return (
            <DIV onClick={(event) => this.getTargetNode(event)}>
                <UL>
                    {treeData && treeData.map((tree, index) => {
                        return (
                            <LI key={index} id={index} className={(tree.children && tree.children.length > 0)? 'link-with-icon' : ''}>
                                {(tree.children && tree.children.length > 0) ? <Tree tree={tree} id={index} /> : <Link id={index} name={tree.name} to={tree.to}/> }                     
                            </LI>
                        )
                    })}
                </UL>
            </DIV>
        )
    }   
}

export default TreeView
