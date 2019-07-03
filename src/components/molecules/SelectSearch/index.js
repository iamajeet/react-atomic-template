import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const SelectWapper = styled.div``;
const StyledTextContainer = styled.div`
  color: #000;
  background: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 0.75rem;
  border-radius: 0.2rem;
  min-height: 2.75rem;
  position: relative;
  width: 100%;
  border: solid 0.5px grey;
`;
const StyledSelectedItemText = styled.div`
  width: 90%;
  float: left;
  position: relative;
`;
const StyledClearSearch = styled.div`
  position: relative;
  float: right;
  width: 20px;
  height: 20px;
  background: #e5e5e5;
  text-align: center;
  line-height: 19px;
  border-radius: 50%;
  cursor: pointer;
`;
const StyledDropdownButton = styled.button`
  font-size: 17px;
  top: 0px;
  right: 0px;
  width: 45px !important;
  position: absolute;
  border: unset;
  line-height: 0px;
  background-color: transparent !important;
  height: 45px !important;
`;
const StyledSearchContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 5px;
`;
const StyledItemContainer = styled.ul`
  display: none;
  background: #fff;
  overflow: auto;
  position: absolute;
  top: 100%;
  width: 99%;
  z-index: 10;
  min-height: 100%;
  margin: auto;
  box-shadow: 2px 2px 4px #999;
  padding: 0px;
`;
const StyledItem = styled.li`
  background-color: #fff;
  height: auto;
  box-shadow: 2px 2px 4px #999;
  margin: 0 0.1rem;
  padding: 0.7rem;
  color: #000;
  font-size: 12px;
  cursor: pointer;
  list-style: none;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 0 45px 0 10px;
  height: 45px;
`;
class SelectSearch extends Component {
  state = {
    options: this.props.properties.options,
    selectedValue: this.props.properties.selectedValue,
    name: this.props.name,
    searchValue: ""
  };
  timer = null;
  DOMElement = {
    _items: null,
    _searchContainer: null,
    _searchInput: null,
    _textContainer: null,
    _dropdownSearch: null
  };
  dropdownOpen = event => {
    this.popupPosition();
    this.closeDropdown(event);
    this.DOMElement._searchContainer.style.display = "block";
    this.DOMElement._textContainer.style.display = "none";
    this.DOMElement._items.style.display = "block";
    this.DOMElement._searchInput.focus();
    window.onresize = event => {
      this.popupPosition(event);
    };
    window.onscroll = event => {
      this.popupPosition(event);
    };
  };
  dropdownItemSelect = selectedValue => {
    this.setState({ selectedValue: selectedValue });
    this.DOMElement._searchContainer.style.display = "none";
    this.DOMElement._textContainer.style.display = "block";
    this.props.onOptionSelect(selectedValue);
  };
  clearSearch = e => {
    this.setState({ selectedValue: "" });
    this.setState({ options: this.props.properties.options });
    this.DOMElement._searchContainer.style.display = "block";
    this.DOMElement._searchContainer.focus();
    this.DOMElement._textContainer.style.display = "none";
    this.DOMElement._searchInput.value = "";
    this.DOMElement._items.style.display = "block";
    this.props.onOptionSelect("");
    e.persist();
  };

  filterOption = event => {
    let title = "";
    let searchValue = this.DOMElement._searchInput.value;
    clearTimeout(this.timer);
    if (this.props.properties.options.length > 0) {
      let filterList = this.props.properties.options.filter(item => {
        title = item.name;
        return title
          .toLocaleLowerCase()
          .startsWith(searchValue.toLocaleLowerCase());
      });
      this.setState({ options: filterList });
    }
    //}, 500);

    event.persist();
  };
  popupPosition = event => {
    var mainContainer = this.props.mainContainer
      ? this.props.mainContainer
      : document.getElementsByTagName("body")[0];
    var mainContainerHeight = mainContainer.clientHeight;
    var element = this.DOMElement._dropdownSearch;
    if (element) {
      var elementTopPosition = element.getBoundingClientRect().y;
      var midHeight = mainContainerHeight / 2;
      var optionsContainerHeight = this.state.options.length * 42;
      var popupContainerHeight =
        optionsContainerHeight > midHeight - 45
          ? midHeight - 45
          : optionsContainerHeight;
      var popopStartPosition =
        midHeight > elementTopPosition ? 0 : "-" + popupContainerHeight;
      this.DOMElement._items.style.height = popupContainerHeight + "px";
      var popopTopPosition = midHeight > elementTopPosition ? "100%" : "0px";
      this.DOMElement._items.style.top = popopTopPosition;
      //document.getElementById(this.props.name + "_items").style.top =
      //popopStartPosition + "px";
      this.DOMElement._items.style.transform =
        "translate3d(2px," + popopStartPosition + "px, 0px)";
      var boxShadow = (this.DOMElement._items.style["boxShadow"] =
        "2px 2px 4px #999");
      var arrBoxShadow = boxShadow.split(" ");
      if (arrBoxShadow && arrBoxShadow.length == 4) {
        this.DOMElement._items.style["boxShadow"] =
          arrBoxShadow[0] +
          " " +
          (midHeight > elementTopPosition ? "" : "-") +
          arrBoxShadow[1] +
          " " +
          arrBoxShadow[2] +
          " " +
          arrBoxShadow[3];
      }
    }
  };
  setSearchOptionState = nextProps => {
    if (nextProps.properties.selectedValue !== "") {
      this.DOMElement._searchContainer.style.display = "none";
      this.DOMElement._textContainer.style.display = "block";
    } else {
      this.DOMElement._searchContainer.style.display = "block";
      this.DOMElement._textContainer.style.display = "none";
    }
  };
  componentWillReceiveProps = nextProps => {
    this.setState({ selectedValue: nextProps.properties.selectedValue });
    this.setSearchOptionState(nextProps);
  };
  closeDropdown = event => {
    const textContainers = document.getElementsByClassName("textContainer");
    if (textContainers.length > 0) {
      for (let element of textContainers) {
        element.style.display = "block";
      }
    }
    const searchContainers = document.getElementsByClassName("searchContainer");
    if (searchContainers.length > 0) {
      for (let element of searchContainers) {
        element.style.display = "none";
      }
    }
    const dropdowns = document.getElementsByClassName("item-container");
    if (dropdowns.length > 0) {
      for (let element of dropdowns) {
        if (
          element.style.display === "block" &&
          !event.target.matches(".searchInput")
        ) {
          element.style.display = "none";
        }
      }
    }
  };
  componentDidMount = () => {
    this.DOMElement._items = document.getElementById(
      this.props.name + "_items"
    );
    this.DOMElement._searchContainer = document.getElementById(
      this.props.name + "_searchContainer"
    );
    this.DOMElement._searchInput = document.getElementById(
      this.props.name + "_searchInput"
    );
    this.DOMElement._textContainer = document.getElementById(
      this.props.name + "_textContainer"
    );
    this.DOMElement._dropdownSearch = document.getElementById(
      this.props.name + "_dropdownSearch"
    );
    this.setSearchOptionState(this.props);
    this.popupPosition();

    window.onclick = event => {
      if (
        !event.target.matches(".dropdown") &&
        !event.target.matches(".textContainer") &&
        !event.target.matches(".searchInput") &&
        !event.target.matches(".clearSearch") &&
        !event.target.matches(".dropdown-btn") &&
        !event.target.matches(".selectedItemText")
      ) {
        this.closeDropdown(event);
      }
    };
  };
  render() {
    return (
      <SelectWapper
        id={this.props.name + "_dropdownSearch"}
        className="hc dropdown"
        tabIndex="0"
        onClick={event => this.dropdownOpen(event)}
        // onKeyUp={this.filterOption}
      >
        <StyledTextContainer
          className="textContainer"
          id={this.props.name + "_textContainer"}
        >
          <StyledSelectedItemText
            className="selectedItemText"
            id={this.props.name + "_selectedItemText"}
          >
            {this.state.selectedValue}
          </StyledSelectedItemText>
          &nbsp;
          {this.state.selectedValue !== "" && (
            <StyledClearSearch
              id={this.props.name + "_clearSearch"}
              className="clearSearch"
              onClick={event => {
                this.clearSearch(event);
              }}
            >
              X
            </StyledClearSearch>
          )}
          {this.state.selectedValue === "" && (
            <StyledDropdownButton
              id={this.props.name + "_dropdown-btn"}
              aria-haspopup="true"
              aria-expanded="true"
              type="button"
              className="dropdown-toggle dropdown-btn"
              onClick={event => this.dropdownOpen(event)}
            />
          )}
        </StyledTextContainer>
        <StyledSearchContainer
          className="searchContainer"
          id={this.props.name + "_searchContainer"}
        >
          <StyledInput
            type="text"
            id={this.props.name + "_searchInput"}
            className="searchInput"
            onChange={this.filterOption}
            autoComplete="off"
          />
          <StyledDropdownButton
            id={this.props.name + "_dropdown-btn"}
            aria-haspopup="true"
            aria-expanded="true"
            type="button"
            className="dropdown-toggle dropdown-btn"
            onClick={event => this.dropdownOpen(event)}
          />
        </StyledSearchContainer>
        <StyledItemContainer
          id={this.props.name + "_items"}
          className="item-container"
          tabIndex="-1"
          style={{ display: "block !important" }}
        >
          {this.state.options.map((item, key) => (
            <StyledItem
              key={item[this.props.properties.optionValueKey]}
              className="item"
              onClick={() =>
                this.dropdownItemSelect(
                  item[this.props.properties.optionValueKey]
                )
              }
            >
              {item[this.props.properties.optionDisplayNameKey]}
            </StyledItem>
          ))}
        </StyledItemContainer>
      </SelectWapper>
    );
  }
}
SelectSearch.propTypes = {
  properties: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.any
  ]),
  name: PropTypes.string,
  reverse: PropTypes.bool
};
export default SelectSearch;
