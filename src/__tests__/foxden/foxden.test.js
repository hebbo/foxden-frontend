/**
 * @jest-environment node
 */
// @flow
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

import { shallowToJson } from "enzyme-to-json";

import { PostComponent, App, getUserByID } from "../../foxden/foxden";

Enzyme.configure({ adapter: new Adapter() });

const foxData: Object = JSON.parse(
  '{"posts":[{"id":"6cbe1c74","userId":"02","imageUrl":"https://randomfox.ca/images/10.jpg","description":"Lonefloof"}],"users":[{"id":"02","username":"XXX"}]}'
);

describe("App", () => {
  it("should render correctly", () => {
    const output = shallow(<App data={foxData} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe("PostComponent", () => {
  it("should render correctly", () => {
    const output = shallow(
      <PostComponent
        key={foxData.posts[0].id}
        post={foxData.posts[0]}
        users={foxData.users}
        getUserFunction={getUserByID}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe("getUserByID", () => {
  test("extract user correctly", () => {
    let actual = { id: "02", username: "XXX" };
    expect(getUserByID(foxData.users, "02")).toEqual(actual);
  });
});
