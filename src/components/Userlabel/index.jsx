import React from 'react'
import { Link } from 'react-router-dom';
import { dummyImage } from '../../utils/constants';

export default function Userlabel() {
    return (
      <>
        <div className="flex gap-2 p-2 justify-between border rounded-lg text-left items-center mb-2 ">
          <div className="user-label flex gap-2 items-center">
            <img
              className="w-10 h-10 shadow rounded-full"
              src={dummyImage}
              alt="profile"
            />
            <div>
              <div className="text-lg font-medium">Alice Banger</div>
            </div>
          </div>
          <div>
            <Link to="/chat/2">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Chat
              </button>
            </Link>
          </div>
        </div>
      </>
    );
  }
  