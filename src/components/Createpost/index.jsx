import React from "react";

export default function Createpost() {
  return (
    <>
      {/* post a message */}
      <div className="p-3 bg-white shadow rounded-lg">
        <div className="text-2xl px-3"> Create Post</div>
        <div className=" create-posts px-3">
          <form>
            <label
              className="block my-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="file_input"
            >
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 p-2 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer"
              id="file_input"
              type="file"
            />

            <label
              for="message"
              class="block my-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="text"
              name="text"
              rows="2"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>

            <div className="mt-2">
              <button
                // disabled={btnpass || loadn}
                type="submit"
                className="text-white transition duration-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full p-2 text-center disabled:opacity-50"
              >
                {false ? "Processing..." : "Create Post"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
