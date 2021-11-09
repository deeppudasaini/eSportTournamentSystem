import "./List.css";
import { useState,useEffect } from "react";
import Add from "./Add";
import ReactTable from "react-table";  

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
            {/* {
              test.map(item => (
                <div className="flex items-center px-4 py-2">
                  <div className="flex-shrink-0 bg-gray-200 rounded-full p-2">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm leading-5 font-medium text-gray-900">
                      {item.name}
                    </p>
                    </div>
                </div>
              ))
            } */}

              
            
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
              onClick={() => {
                setAdd(!add);
              }}
            >
              Create New {props.title}
            </button>
            {renderAdd()}
            {/* <table className="table-fixed w-full font-serif">
              <thead>
                <tr className="bg-gray-100">
                {attribute.map(item=>(
                    <th className="px-4 py-2">{item}</th>
                  ))}
                  <th className="px-4 py-2">Action</th>
                
                </tr>
              </thead>
              <tbody>
                

                

                <tr>
               
                
                 
                  <td className="border px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
                
              </tbody>
            </table> */}
            <ReactTable 
              data={props.data}
              columns={[
                {
                  Header: "Name",
                  accessor: "name",
                
                },
                {
                  Header: "Email",
                  accessor: "email",
                },
                {
                  Header: "Phone",
                  accessor: "phone",
                },
                {
                  Header: "Action",
                  accessor: "action",
                }  
              ]}
              defaultPageSize={10}
            />

            
          </div>
        </div>
      </div>
    </div>
  );
}
