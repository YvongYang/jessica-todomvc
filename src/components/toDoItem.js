import React from 'react';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: this.props.item.completed || false,
      editing: false
    };
  }

  toogle() {
    this.setState({
      completed: !this.state.completed
    }, () => {
      this.props.onChange(this.state.completed);
    });
  }

  onEdit() {
    this.setState({
      editing: true
    });
  }

  onDelete() {
    this.props.onDelete(this.props.item.id);
  }

  render() {
    const {item} = this.props;

    let classNameArray = [];

    if (this.state.completed) {
      classNameArray.push('completed');
    }
    if (this.state.editing) {
      classNameArray.push('editing');
    }

    let className = classNameArray.join(' ');

    return (
      <li className={className}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.state.completed} onChange={this.toogle.bind(this)}/>
          <label onDoubleClick={this.onEdit.bind(this)}>{item.title}</label>
          <button className="destroy" onClick={this.onDelete.bind(this)} />
        </div>
        <input className="edit" value={item.title} />
      </li>
    );
  }
}

ToDoItem.defaultProps = {
};

export default ToDoItem;
