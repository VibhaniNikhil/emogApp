(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{457:function(e,t,a){"use strict";a.r(t);var i=a(63),l=a(64),o=a(66),n=a(65),r=a(67),s=a(68),c=a(1),m=a.n(c),u=a(205),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(n.a)(t).call(this,e))).state={modal:!1,large:!1,small:!1,primary:!1,success:!1,warning:!1,danger:!1,info:!1},a.toggle=a.toggle.bind(Object(s.a)(Object(s.a)(a))),a.toggleLarge=a.toggleLarge.bind(Object(s.a)(Object(s.a)(a))),a.toggleSmall=a.toggleSmall.bind(Object(s.a)(Object(s.a)(a))),a.togglePrimary=a.togglePrimary.bind(Object(s.a)(Object(s.a)(a))),a.toggleSuccess=a.toggleSuccess.bind(Object(s.a)(Object(s.a)(a))),a.toggleWarning=a.toggleWarning.bind(Object(s.a)(Object(s.a)(a))),a.toggleDanger=a.toggleDanger.bind(Object(s.a)(Object(s.a)(a))),a.toggleInfo=a.toggleInfo.bind(Object(s.a)(Object(s.a)(a))),a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggleLarge",value:function(){this.setState({large:!this.state.large})}},{key:"toggleSmall",value:function(){this.setState({small:!this.state.small})}},{key:"togglePrimary",value:function(){this.setState({primary:!this.state.primary})}},{key:"toggleSuccess",value:function(){this.setState({success:!this.state.success})}},{key:"toggleWarning",value:function(){this.setState({warning:!this.state.warning})}},{key:"toggleDanger",value:function(){this.setState({danger:!this.state.danger})}},{key:"toggleInfo",value:function(){this.setState({info:!this.state.info})}},{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(u.hb,null,m.a.createElement(u.u,null,m.a.createElement(u.i,null,m.a.createElement(u.n,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Bootstrap Modals"),m.a.createElement(u.j,null,m.a.createElement(u.e,{onClick:this.toggle,className:"mr-1"},"Launch demo modal"),m.a.createElement(u.Q,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},m.a.createElement(u.T,{toggle:this.toggle},"Modal title"),m.a.createElement(u.R,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),m.a.createElement(u.S,null,m.a.createElement(u.e,{color:"primary",onClick:this.toggle},"Do Something")," ",m.a.createElement(u.e,{color:"secondary",onClick:this.toggle},"Cancel"))),m.a.createElement(u.e,{onClick:this.toggleLarge,className:"mr-1"},"Launch large modal"),m.a.createElement(u.Q,{isOpen:this.state.large,toggle:this.toggleLarge,className:"modal-lg "+this.props.className},m.a.createElement(u.T,{toggle:this.toggleLarge},"Modal title"),m.a.createElement(u.R,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),m.a.createElement(u.S,null,m.a.createElement(u.e,{color:"primary",onClick:this.toggleLarge},"Do Something")," ",m.a.createElement(u.e,{color:"secondary",onClick:this.toggleLarge},"Cancel"))),m.a.createElement(u.e,{onClick:this.toggleSmall,className:"mr-1"},"Launch small modal"),m.a.createElement(u.Q,{isOpen:this.state.small,toggle:this.toggleSmall,className:"modal-sm "+this.props.className},m.a.createElement(u.T,{toggle:this.toggleSmall},"Modal title"),m.a.createElement(u.R,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),m.a.createElement(u.S,null,m.a.createElement(u.e,{color:"primary",onClick:this.toggleSmall},"Do Something")," ",m.a.createElement(u.e,{color:"secondary",onClick:this.toggleSmall},"Cancel"))),m.a.createElement("hr",null),m.a.createElement(u.e,{color:"primary",onClick:this.togglePrimary,className:"mr-1"},"Primary modal"),m.a.createElement(u.Q,{isOpen:this.state.primary,toggle:this.togglePrimary,className:"modal-primary "+this.props.className},m.a.createElement(u.T,{toggle:this.togglePrimary},"Modal title"),m.a.createElement(u.R,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),m.a.createElement(u.S,null,m.a.createElement(u.e,{color:"primary",onClick:this.togglePrimary},"Do Something")," ",m.a.createElement(u.e,{color:"secondary",onClick:this.togglePrimary},"Cancel"))),m.a.createElement(u.e,{color:"success",onClick:this.toggleSuccess,className:"mr-1"},"Success modal"),m.a.createElement(u.Q,{isOpen:this.state.success,toggle:this.toggleSuccess,className:"modal-success "+this.props.className},m.a.createElement(u.T,{toggle:this.toggleSuccess},"Modal title"),m.a.createElement(u.R,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),m.a.createElement(u.S,null,m.a.createElement(u.e,{color:"success",onClick:this.toggleSuccess},"Do Something")," ",m.a.createElement(u.e,{color:"secondary",onClick:this.toggleSuccess},"Cancel"))),m.a.createElement(u.e,{color:"warning",onClick:this.toggleWarning,className:"mr-1"},"Warning modal"),m.a.createElement(u.Q,{isOpen:this.state.warning,toggle:this.toggleWarning,className:"modal-warning "+this.props.className},m.a.createElement(u.T,{toggle:this.toggleWarning},"Modal title"),m.a.createElement(u.R,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),m.a.createElement(u.S,null,m.a.createElement(u.e,{color:"warning",onClick:this.toggleWarning},"Do Something")," ",m.a.createElement(u.e,{color:"secondary",onClick:this.toggleWarning},"Cancel"))),m.a.createElement(u.e,{color:"danger",onClick:this.toggleDanger,className:"mr-1"},"Danger modal"),m.a.createElement(u.Q,{isOpen:this.state.danger,toggle:this.toggleDanger,className:"modal-danger "+this.props.className},m.a.createElement(u.T,{toggle:this.toggleDanger},"Modal title"),m.a.createElement(u.R,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),m.a.createElement(u.S,null,m.a.createElement(u.e,{color:"danger",onClick:this.toggleDanger},"Do Something")," ",m.a.createElement(u.e,{color:"secondary",onClick:this.toggleDanger},"Cancel"))),m.a.createElement(u.e,{color:"info",onClick:this.toggleInfo,className:"mr-1"},"Info modal"),m.a.createElement(u.Q,{isOpen:this.state.info,toggle:this.toggleInfo,className:"modal-info "+this.props.className},m.a.createElement(u.T,{toggle:this.toggleInfo},"Modal title"),m.a.createElement(u.R,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),m.a.createElement(u.S,null,m.a.createElement(u.e,{color:"primary",onClick:this.toggleInfo},"Do Something")," ",m.a.createElement(u.e,{color:"secondary",onClick:this.toggleInfo},"Cancel"))))))))}}]),t}(c.Component);t.default=g}}]);
//# sourceMappingURL=41.38c2c0e8.chunk.js.map