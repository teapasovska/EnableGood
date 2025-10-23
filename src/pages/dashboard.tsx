import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Sidebar from "../components/common/Sidebar";

interface Post {
  id: number;
  content: string;
  author: string;
  company: string;
  date: string;
  image?: string;
  avatar: string;
}

const DashboardPage = () => {
  const [dynamicPosts, setDynamicPosts] = useState<Post[]>([]);
  const [nextPostId, setNextPostId] = useState(1);
  const [newPostText, setNewPostText] = useState("");
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"share" | "submit" | null>(null);
  const [expandedComments, setExpandedComments] = useState<Set<number>>(
    new Set()
  );
  const router = useRouter();
  const [comments, setComments] = useState<{ [key: number]: string[] }>({});
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const newLikedPosts = new Set(prev);
      if (newLikedPosts.has(postId)) {
        newLikedPosts.delete(postId);
      } else {
        newLikedPosts.add(postId);
      }
      return newLikedPosts;
    });
  };

  const toggleComments = (postId: number) => {
    setExpandedComments((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(postId)) {
        newExpanded.delete(postId);
      } else {
        newExpanded.add(postId);
      }
      return newExpanded;
    });
  };

  const addComment = (postId: number) => {
    const commentText = newComment[postId]?.trim();
    if (!commentText) return;

    setComments((prev) => ({
      ...prev,
      [postId]: [...(prev[postId] || []), commentText],
    }));

    setNewComment((prev) => ({
      ...prev,
      [postId]: "",
    }));
  };

  const handleCommentChange = (postId: number, value: string) => {
    setNewComment((prev) => ({
      ...prev,
      [postId]: value,
    }));
  };

  const createPost = () => {
    const content = newPostText.trim();
    if (!content) return;

    const newPost: Post = {
      id: nextPostId,
      content,
      author: "User name",
      company: "Company name",
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      avatar: "/dashboardimg/3.jpg",
    };

    setDynamicPosts((prev) => [newPost, ...prev]);
    setNextPostId((prev) => prev + 1);
    setNewPostText("");
    closeModal();
  };

  const openModal = (type: "share" | "submit") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
    setNewPostText("");
  };
  return (
    <div className="min-h-screen color8">
      <Sidebar />

      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="hidden md:block w-16 flex-shrink-0"></div>

        <div className="w-full md:flex-1 p-2 sm:p-4 md:p-6 pl-20 md:pl-0 transition-all duration-300">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, User!
              </h1>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
              <p className="text-gray-600 mb-4">
                Share the good you&apos;ve been doing!
              </p>
              <div className="flex space-x-3">
                <button
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => openModal("share")}
                >
                  <span className="text-color2">📄</span>
                  <span>Share report</span>
                </button>
                <button
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => openModal("submit")}
                >
                  <span className="text-color2">📊</span>
                  <span>Submit impact update</span>
                </button>
                <button className="ml-auto w-10 h-10 color2 text-white rounded-full flex items-center justify-center hover-color2 cursor-pointer">
                  <span>→</span>
                </button>
              </div>
            </div>

            <div className="flex justify-end mb-4">
              <span className="text-gray-400 text-sm">Sort</span>
            </div>

            <div className="space-y-6">
              {dynamicPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm border"
                >
                  <div className="p-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={post.avatar}
                          alt="User avatar"
                          width={40}
                          height={40}
                          className="w-10 h-10 object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{post.author}</h3>
                        <p className="text-sm text-gray-500">{post.company}</p>
                      </div>
                      <div className="ml-auto text-sm text-gray-400">
                        {post.date}
                      </div>
                    </div>
                    {post.image && (
                      <div className="mb-4">
                        <Image
                          src={post.image}
                          alt="Post image"
                          width={600}
                          height={300}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <p className="text-gray-700 mb-4">{post.content}</p>
                    <div className="flex items-center space-x-6 text-gray-500">
                      <button
                        className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                        onClick={() => toggleLike(post.id)}
                      >
                        <span
                          className={
                            likedPosts.has(post.id)
                              ? "text-red-500"
                              : "text-gray-500"
                          }
                        >
                          {likedPosts.has(post.id) ? "❤️" : "♡"}
                        </span>
                        <span>
                          {likedPosts.has(post.id) ? "Liked" : "Like"}
                        </span>
                      </button>
                      <button
                        className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                        onClick={() => toggleComments(post.id)}
                      >
                        <span>💬</span>
                        <span>
                          Comment{" "}
                          {comments[post.id]?.length
                            ? `(${comments[post.id].length})`
                            : ""}
                        </span>
                      </button>
                      <button className="flex items-center space-x-1 hover-text-color2 cursor-pointer">
                        <span>↗</span>
                        <span>Report</span>
                      </button>
                    </div>

                    {expandedComments.has(post.id) && (
                      <div className="mt-4 border-t pt-4">
                        {comments[post.id]?.map((comment, index) => (
                          <div
                            key={index}
                            className="mb-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                              <div>
                                <p className="font-medium text-sm">User</p>
                                <p className="text-gray-700 text-sm">
                                  {comment}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="flex space-x-3 mt-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                          <div className="flex-1">
                            <input
                              type="text"
                              placeholder="Write a comment..."
                              className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              value={newComment[post.id] || ""}
                              onChange={(e) =>
                                handleCommentChange(post.id, e.target.value)
                              }
                              onKeyPress={(e) =>
                                e.key === "Enter" && addComment(post.id)
                              }
                            />
                          </div>
                          <button
                            onClick={() => addComment(post.id)}
                            className="px-3 py-2 color2 text-white rounded-lg text-sm hover-color2 cursor-pointer"
                          >
                            Post
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/dashboardimg/3.jpg"
                        alt="User avatar"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">User name</h3>
                      <p className="text-sm text-gray-500">Company name</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-400">
                      12 April 2024
                    </div>
                  </div>
                  <div className="mb-4">
                    <Image
                      src="/dashboardimg/9.jpg"
                      alt="Conference room meeting"
                      width={600}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Keep your messages short, but make sure they cover
                    everything you need to say.
                  </p>
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleLike(1)}
                    >
                      <span
                        className={
                          likedPosts.has(1) ? "text-red-500" : "text-gray-500"
                        }
                      >
                        {likedPosts.has(1) ? "❤️" : "♡"}
                      </span>
                      <span>{likedPosts.has(1) ? "Liked" : "Like"}</span>
                    </button>
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleComments(1)}
                    >
                      <span>💬</span>
                      <span>
                        Comment{" "}
                        {comments[1]?.length ? `(${comments[1].length})` : ""}
                      </span>
                    </button>
                    <button className="flex items-center space-x-1 hover-text-color2 cursor-pointer">
                      <span>↗</span>
                      <span>Report</span>
                    </button>
                  </div>

                  {expandedComments.has(1) && (
                    <div className="mt-4 border-t pt-4">
                      {comments[1]?.map((comment, index) => (
                        <div
                          key={index}
                          className="mb-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                            <div>
                              <p className="font-medium text-sm">User</p>
                              <p className="text-gray-700 text-sm">{comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="flex space-x-3 mt-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Write a comment..."
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newComment[1] || ""}
                            onChange={(e) =>
                              handleCommentChange(1, e.target.value)
                            }
                            onKeyPress={(e) =>
                              e.key === "Enter" && addComment(1)
                            }
                          />
                        </div>
                        <button
                          onClick={() => addComment(1)}
                          className="px-3 py-2 color2 text-white rounded-lg text-sm hover-color2 cursor-pointer"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/dashboardimg/2.jpg"
                        alt="User avatar"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">User name</h3>
                      <p className="text-sm text-gray-500">Company name</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-400">
                      12 April 2024
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Keep your messages short, but make sure they cover
                    everything you need to say.
                  </p>
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleLike(2)}
                    >
                      <span
                        className={
                          likedPosts.has(2) ? "text-red-500" : "text-gray-500"
                        }
                      >
                        {likedPosts.has(2) ? "❤️" : "♡"}
                      </span>
                      <span>{likedPosts.has(2) ? "Liked" : "Like"}</span>
                    </button>
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleComments(2)}
                    >
                      <span>💬</span>
                      <span>
                        Comment{" "}
                        {comments[2]?.length ? `(${comments[2].length})` : ""}
                      </span>
                    </button>
                    <button className="flex items-center space-x-1 hover-text-color2 cursor-pointer">
                      <span>↗</span>
                      <span>Report</span>
                    </button>
                  </div>

                  {expandedComments.has(2) && (
                    <div className="mt-4 border-t pt-4">
                      {comments[2]?.map((comment, index) => (
                        <div
                          key={index}
                          className="mb-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                            <div>
                              <p className="font-medium text-sm">User</p>
                              <p className="text-gray-700 text-sm">{comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="flex space-x-3 mt-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Write a comment..."
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newComment[2] || ""}
                            onChange={(e) =>
                              handleCommentChange(2, e.target.value)
                            }
                            onKeyPress={(e) =>
                              e.key === "Enter" && addComment(2)
                            }
                          />
                        </div>
                        <button
                          onClick={() => addComment(2)}
                          className="px-3 py-2 color2 text-white rounded-lg text-sm hover-color2 cursor-pointer"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-4">
                  <div className="text-center text-gray-500 mb-6">
                    A brand new collaboration was established!
                  </div>
                  <div className="flex items-center justify-center space-x-8 mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                        <Image
                          src="/dashboardimg/2.jpg"
                          alt="Company avatar"
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                      <p className="font-semibold">Company name</p>
                      <p className="text-sm text-gray-500">E-commerce</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">→</span>
                      <span className="text-2xl">←</span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                        <Image
                          src="/dashboardimg/1.jpg"
                          alt="NGO avatar"
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                      <p className="font-semibold">NGO name</p>
                      <p className="text-sm text-gray-500">SDG goal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleLike(5)}
                    >
                      <span
                        className={
                          likedPosts.has(5) ? "text-red-500" : "text-gray-500"
                        }
                      >
                        {likedPosts.has(5) ? "❤️" : "♡"}
                      </span>
                      <span>{likedPosts.has(5) ? "Liked" : "Like"}</span>
                    </button>
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleComments(5)}
                    >
                      <span>💬</span>
                      <span>
                        Comment{" "}
                        {comments[5]?.length ? `(${comments[5].length})` : ""}
                      </span>
                    </button>
                    <button className="flex items-center space-x-1 hover-text-color2 cursor-pointer">
                      <span>↗</span>
                      <span>Report</span>
                    </button>
                  </div>

                  {expandedComments.has(5) && (
                    <div className="mt-4 border-t pt-4">
                      {comments[5]?.map((comment, index) => (
                        <div
                          key={index}
                          className="mb-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                            <div>
                              <p className="font-medium text-sm">User</p>
                              <p className="text-gray-700 text-sm">{comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="flex space-x-3 mt-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Write a comment..."
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newComment[5] || ""}
                            onChange={(e) =>
                              handleCommentChange(5, e.target.value)
                            }
                            onKeyPress={(e) =>
                              e.key === "Enter" && addComment(5)
                            }
                          />
                        </div>
                        <button
                          onClick={() => addComment(5)}
                          className="px-3 py-2 color2 text-white rounded-lg text-sm hover-color2 cursor-pointer"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/dashboardimg/1.jpg"
                        alt="User avatar"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">User name</h3>
                      <p className="text-sm text-gray-500">Company name</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-400">
                      12 April 2024
                    </div>
                  </div>
                  <div className="mb-4">
                    <Image
                      src="/dashboardimg/5.jpg"
                      alt="Conference presentation"
                      width={600}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    Keep your messages short, but make sure they cover
                    everything you need to say.
                  </p>
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleLike(3)}
                    >
                      <span
                        className={
                          likedPosts.has(3) ? "text-red-500" : "text-gray-500"
                        }
                      >
                        {likedPosts.has(3) ? "❤️" : "♡"}
                      </span>
                      <span>{likedPosts.has(3) ? "Liked" : "Like"}</span>
                    </button>
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleComments(3)}
                    >
                      <span>💬</span>
                      <span>
                        Comment{" "}
                        {comments[3]?.length ? `(${comments[3].length})` : ""}
                      </span>
                    </button>
                    <button className="flex items-center space-x-1 hover-text-color2 cursor-pointer">
                      <span>↗</span>
                      <span>Report</span>
                    </button>
                  </div>

                  {expandedComments.has(3) && (
                    <div className="mt-4 border-t pt-4">
                      {comments[3]?.map((comment, index) => (
                        <div
                          key={index}
                          className="mb-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                            <div>
                              <p className="font-medium text-sm">User</p>
                              <p className="text-gray-700 text-sm">{comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="flex space-x-3 mt-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Write a comment..."
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newComment[3] || ""}
                            onChange={(e) =>
                              handleCommentChange(3, e.target.value)
                            }
                            onKeyPress={(e) =>
                              e.key === "Enter" && addComment(3)
                            }
                          />
                        </div>
                        <button
                          onClick={() => addComment(3)}
                          className="px-3 py-2 color2 text-white rounded-lg text-sm hover-color2 cursor-pointer"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/dashboardimg/8.jpg"
                        alt="User avatar"
                        width={40}
                        height={40}
                        className="w-10 h-10 object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">User name</h3>
                      <p className="text-sm text-gray-500">Company name</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-400">
                      12 April 2024
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Keep your messages short, but make sure they cover
                    everything you need to say.
                  </p>
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleLike(4)}
                    >
                      <span
                        className={
                          likedPosts.has(4) ? "text-red-500" : "text-gray-500"
                        }
                      >
                        {likedPosts.has(4) ? "❤️" : "♡"}
                      </span>
                      <span>{likedPosts.has(4) ? "Liked" : "Like"}</span>
                    </button>
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleComments(4)}
                    >
                      <span>💬</span>
                      <span>
                        Comment{" "}
                        {comments[4]?.length ? `(${comments[4].length})` : ""}
                      </span>
                    </button>
                    <button className="flex items-center space-x-1 hover-text-color2 cursor-pointer">
                      <span>↗</span>
                      <span>Report</span>
                    </button>
                  </div>

                  {expandedComments.has(4) && (
                    <div className="mt-4 border-t pt-4">
                      {comments[4]?.map((comment, index) => (
                        <div
                          key={index}
                          className="mb-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                            <div>
                              <p className="font-medium text-sm">User</p>
                              <p className="text-gray-700 text-sm">{comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="flex space-x-3 mt-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Write a comment..."
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newComment[4] || ""}
                            onChange={(e) =>
                              handleCommentChange(4, e.target.value)
                            }
                            onKeyPress={(e) =>
                              e.key === "Enter" && addComment(4)
                            }
                          />
                        </div>
                        <button
                          onClick={() => addComment(4)}
                          className="px-3 py-2 color2 text-white rounded-lg text-sm hover-color2 cursor-pointer"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-4">
                  <div className="text-center text-gray-500 mb-6">
                    A brand new collaboration was established!
                  </div>
                  <div className="flex items-center justify-center space-x-8 mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                        <Image
                          src="/dashboardimg/8.jpg"
                          alt="Company avatar"
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                      <p className="font-semibold">Company name</p>
                      <p className="text-sm text-gray-500">E-commerce</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">→</span>
                      <span className="text-2xl">←</span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                        <Image
                          src="/dashboardimg/3.jpg"
                          alt="NGO avatar"
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover"
                        />
                      </div>
                      <p className="font-semibold">NGO name</p>
                      <p className="text-sm text-gray-500">SDG goal</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-gray-500">
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleLike(6)}
                    >
                      <span
                        className={
                          likedPosts.has(6) ? "text-red-500" : "text-gray-500"
                        }
                      >
                        {likedPosts.has(6) ? "❤️" : "♡"}
                      </span>
                      <span>{likedPosts.has(6) ? "Liked" : "Like"}</span>
                    </button>
                    <button
                      className="flex items-center space-x-1 hover-text-color2 cursor-pointer"
                      onClick={() => toggleComments(6)}
                    >
                      <span>💬</span>
                      <span>
                        Comment{" "}
                        {comments[6]?.length ? `(${comments[6].length})` : ""}
                      </span>
                    </button>
                    <button className="flex items-center space-x-1 hover-text-color2 cursor-pointer">
                      <span>↗</span>
                      <span>Report</span>
                    </button>
                  </div>

                  {expandedComments.has(6) && (
                    <div className="mt-4 border-t pt-4">
                      {comments[6]?.map((comment, index) => (
                        <div
                          key={index}
                          className="mb-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                            <div>
                              <p className="font-medium text-sm">User</p>
                              <p className="text-gray-700 text-sm">{comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="flex space-x-3 mt-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Write a comment..."
                            className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newComment[6] || ""}
                            onChange={(e) =>
                              handleCommentChange(6, e.target.value)
                            }
                            onKeyPress={(e) =>
                              e.key === "Enter" && addComment(6)
                            }
                          />
                        </div>
                        <button
                          onClick={() => addComment(6)}
                          className="px-3 py-2 color2 text-white rounded-lg text-sm hover-color2 cursor-pointer"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-80 p-2 sm:p-4 md:p-6 flex-shrink-0 pl-20 md:pl-0 transition-all duration-300">
          <div className="flex items-center justify-end space-x-4 mb-4">
            <div className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7A7,7 0 0,1 20,14V16A1,1 0 0,0 21,17H22V19H2V17H3A1,1 0 0,0 4,16V14A7,7 0 0,1 11,7V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M6,14A5,5 0 0,0 11,9V7.91C7.06,8.31 4,11.42 4,15.5V16A1,1 0 0,0 5,17A1,1 0 0,0 6,16V14M9,21A3,3 0 0,0 12,24A3,3 0 0,0 15,21H9Z" />
              </svg>
            </div>
            <div
              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 cursor-pointer"
              onClick={() => router.push("/messages")}
              title="Messages"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H5.17L4,17.17V4H20V16Z" />
              </svg>
            </div>
          </div>
          <div className="mb-6 grid grid-cols-1 gap-2 sm:gap-4">
            <Image
              src="/dashboardimg/10.jpg"
              alt="Coca Cola"
              width={300}
              height={150}
              className="w-full h-28 sm:h-32 object-cover rounded-lg"
            />
            <Image
              src="/dashboardimg/6.jpg"
              alt="nestle"
              width={300}
              height={100}
              className="w-full h-20 sm:h-24 object-cover rounded-lg"
            />
            <Image
              src="/dashboardimg/12.jpg"
              alt="Porsche"
              width={300}
              height={100}
              className="w-full h-20 sm:h-24 object-cover rounded-lg"
            />
          </div>

          <div>
            <h3 className="text-md font-bold text-gray-900 mb-6">
              Recommended matches for you
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 ">
                <div className="relative">
                  <Image
                    src="/dashboardimg/11.jpg"
                    alt="Forest"
                    width={300}
                    height={200}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center space-x-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                    <span>Badge</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Title
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Keep your messages short, but make sure they cover
                    everything you need to say.
                  </p>
                  <div className="flex space-x-3">
                    <button
                      className="flex-1 px-4 py-2.5 color2 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                      onClick={() => router.push("/request")}
                    >
                      Connect
                    </button>
                    <button className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                      Not for me
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 ">
                <div className="relative">
                  <Image
                    src="/dashboardimg/7.jpg"
                    alt="Hands"
                    width={300}
                    height={200}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center space-x-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                    <span>Badge</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Title
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Keep your messages short, but make sure they cover
                    everything you need to say.
                  </p>
                  <div className="flex space-x-3">
                    <button
                      className="flex-1 px-4 py-2.5 color2 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                      onClick={() => router.push("/request")}
                    >
                      Connect
                    </button>
                    <button className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                      Not for me
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="relative">
                  <Image
                    src="/dashboardimg/4.jpg"
                    alt="Person with laptop"
                    width={300}
                    height={200}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-md flex items-center space-x-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                    <span>Badge</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    Title
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Keep your messages short, but make sure they cover
                    everything you need to say.
                  </p>
                  <div className="flex space-x-3">
                    <button
                      className="flex-1 px-4 py-2.5 color2 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                      onClick={() => router.push("/request")}
                    >
                      Connect
                    </button>
                    <button className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                      Not for me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 sm:p-6 w-full max-w-md mx-2 sm:mx-4 relative shadow-2xl border border-gray-200">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl cursor-pointer"
            >
              ×
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Hi, User user!
              </h2>

              <div className="mb-6">
                <textarea
                  placeholder="Share the good you've been doing!"
                  className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={newPostText}
                  onChange={(e) => setNewPostText(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  <button className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21,15 16,10 5,21" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 16.2a2 2 0 0 1-2.83-2.83l8.49-8.49" />
                    </svg>
                  </button>
                </div>

                <button
                  className="px-6 py-2 color2 text-white rounded-lg hover-color2 transition-colors cursor-pointer font-medium"
                  onClick={createPost}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
