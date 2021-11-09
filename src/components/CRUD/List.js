import "./List.css";
import { useState } from "react";
import Add from "./Add";
import Table from "./Table";

export default function List(props) {
  const [add, setAdd] = useState(false);

 
  
  const renderAdd = () => {
    if (add) {
      return (
        <div>
          <Add
            cancel={
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={() => {
                    setAdd(false);
                  }}
                >
                  Cancel
                </button>
              </span>
            }
          />
        </div>
      );
    }
  };
  return (
    <div>
      <x-slot name="header">
        <h2 className="font-semibold text-xl text-white leading-tight">
          All {props.title}
        </h2>
      </x-slot>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
            {/* @if (session()->has('message'))
                <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md my-3" role="alert">
                  <div className="flex">
                    <div>
                      <p className="text-sm">{{ session('message') }}</p>
                    </div>
                  </div>
                </div>
            @endif */}
            

              
            
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
              onClick={() => {
                setAdd(!add);
              }}
            >
              Create New {props.title}
            </button>
            
            {renderAdd()}
            <Table
              data={props.data}
              columns={props.columns}
              />
              
          </div>
        </div>
      </div>
    </div>
  );
}
