/**
 * @jest-environment node
 */
// @flow
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

import { shallowToJson } from "enzyme-to-json";

import { PostComponent, App, getUserByID } from "./foxden/foxden";

Enzyme.configure({ adapter: new Adapter() });

describe("render", () => {
  test("mock test", () => {
    expect(true).toEqual(true);
  });
});

describe("App", () => {
  it("should render correctly", () => {
    let props = JSON.parse(
      '{"posts":[{"id":"6cbe1c74","userId":"02","imageUrl":"https://randomfox.ca/images/10.jpg","description":"Lonefloof"}],"users":[{"id":"02","username":"XXX"}]}'
    );

    const output = shallow(<App data={props} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe("PostComponent", () => {
  it("should render correctly", () => {
    let props = JSON.parse(
      '{"posts":[{"id":"6cbe1c74","userId":"02","imageUrl":"https://randomfox.ca/images/10.jpg","description":"Lonefloof"}],"users":[{"id":"02","username":"XXX"}]}'
    );

    const output = shallow(
      <PostComponent
        key={props.posts[0].id}
        post={props.posts[0]}
        users={props.users}
        getUserFunction={getUserByID}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
