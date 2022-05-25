import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-6">
        {" "}
        Welcome to my Blogs
      </h1>

      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold ml-4">
            1. How will you improve the performance of a React Application?
          </h2>
          <p className="ml-2">
            <span className="text-xl ml-6 font-bold">Answer :</span>I think we
            should follow below steps to improve the performance of a React
            Application : 1. Use memo and pureComponent, 2. Avoid Anonymous
            Functions, 3. Avoid Object Literals, 4. Use React.Lazy and
            React.Suspense, 4. Avoid frequent Mounting/Unmounting.
          </p>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold ml-4">
            2. What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="ml-2">
            <span className="text-xl ml-6 font-bold">Answer :</span>The Four
            Kinds of React State to Manage When we talk about state in our
            applications, it’s important to be clear about what types of state
            actually matter. There are four main types of state you need to
            properly manage in your React apps: Local state, Global state,
            Server state, URL state.
          </p>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold ml-4">
            3. How does prototypical inheritance work?
          </h2>
          <p className="ml-2">
            <span className="text-xl ml-6 font-bold">Answer :</span> The
            abstract operation GetPrototypeFromConstructor takes arguments
            constructor (a function object) and intrinsicDefaultProto (a String)
            and returns either a normal completion containing an Object or a
            throw completion. It determines the [Prototype] value that should be
            used to create an object corresponding to a specific constructor.
            The value is retrieved from the constructor's "prototype" property,
            if it exists. Otherwise the intrinsic named by intrinsicDefaultProto
            is used for [Prototype]. It performs the following steps when
            called: 1. Assert: intrinsicDefaultProto is this specification's
            name of an intrinsic object. The corresponding object must be an
            intrinsic that is intended to be used as the [Prototype] value of an
            object. 2. Let proto be ? Get(constructor, "prototype"). 3. If
            Type(proto) is not Object, then a. Let realm be ?
            GetFunctionRealm(constructor). b. Set proto to realm's intrinsic
            object named intrinsicDefaultProto. 4. Return proto.
          </p>
        </div>
      </div>

      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold ml-4">
            4. Why you do not set the state directly in React. For example, if
            you have const [products, setProducts] = useState([]). Why you do
            not set products = [...] instead, you use the setProducts.
          </h2>
          <p className="ml-2">
            <span className="text-xl ml-6 font-bold">Answer :</span> If you’ve
            tried it out, you might’ve noticed nothing bad happened. If you
            modify state directy, call this.setState({}) or even
            this.forceUpdate(), then everything might appear to be just fine.
            This is a bad idea for two reasons (even though it would work in
            this example, and many others). (other patterns to avoid are things
            like this.state.something = x and this.state = x) Mutating state
            directly can lead to odd bugs, and components that are hard to
            optimize. Here’s an example. As you may already know, a common way
            to tune a React component for performance is to make it “pure,”
            which causes it to only re-render when its props change (instead of
            every time its parent re-renders). This can be done automatically by
            extending React.PureComponent instead of React.Component, or
            manually by implementing the shouldComponentUpdate lifecycle method
            to compare nextProps with current props. If the props look the same,
            it skips the render, and saves some time.Here is a simple component
            that renders a list of items ( React.PureComponent).
          </p>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold ml-4">
            5. What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="ml-2">
            <span className="text-xl ml-6 font-bold">Answer :</span>I have a
            list of products (i.e an array) . Each product is an object with
            property id, name. description, price, etc… The answer would be:{" "}
            <span className=" font-bold">[ products[0].name ].</span>
            Note: I cann't give example because of we cann't write code in html
            tags.
          </p>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl font-bold ml-4">
            6. What is Unit Testing? Why should write unit tests?
          </h2>
          <p className="ml-2">
            <span className="text-xl ml-6 font-bold">Answer :</span>{" "}
            <span className="font-bold">Unit Testing: </span>
            Unit testing, a testing technique using which individual modules are
            tested to determine if there are any issues by the developer
            himself. It is concerned with functional correctness of the
            standalone modules. The main aim is to isolate each unit of the
            system to identify, analyze and fix the defects.
          </p>
          <p>
            There are numerous benefits to writing unit tests; they help with
            regression, provide documentation, and facilitate good design.
            However, hard to read and brittle unit tests can wreak havoc on your
            code base. This article describes some best practices regarding unit
            test design for your .NET Core and .NET Standard projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
