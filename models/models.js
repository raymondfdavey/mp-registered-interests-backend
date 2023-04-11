// const client = require("../connection");
// require("dotenv").config();
var ObjectId = require("mongodb").ObjectId;
const connection = require("../src/connection");
exports.fetchSummary = async () => {
  console.log("IN MODELS OK");
  try {
    console.log("IN MODELS OK2");

    const cursor = await connection.db("registered_interests").collection("members_production").find();
    console.log("IN MODELS OK3");
    const results = await cursor.toArray();
    console.log("IN MODELS OK4");

    return results;
  } catch (e) {
    console.log("IN ERROR 5");

    console.error(e);
  }
};

exports.fetchMembersInterestsById = async (memberId) => {
  console.log("in fetch Members, ID:", memberId);
  try {
    const cursor = await connection
      .db("registered_interests")
      .collection("interests_production")
      .find({ "memberId": new ObjectId(memberId) });
    const results = await cursor.toArray();
    return results;
  } catch (e) {
    console.error(e);
  }
};

exports.fetchMembersInterestsByIdAndDate = async (memberId, date) => {
  try {
    const cursor = await connection
      .db("registered_interests")
      .collection("interests_production")
      .find({
        memberId: new ObjectId(memberId),
        registerDate: {
          $gte: new Date(`${date}-01-01T00:00:00.000Z`),
          $lt: new Date(`${(parseInt(date) + 1).toString()}-01-01T00:00:00.000Z`),
        },
      });
    const results = await cursor.toArray();
    return results;
  } catch (e) {
    console.error(e);
  }
};
exports.fetchMembersInterestsByIdAndDateAndCategory = async (memberId, date, category) => {
  console.log(memberId, date, category);
  const cursor = await connection
    .db("registered_interests")
    .collection("interests_production")
    .find({
      memberId: new ObjectId(memberId),
      registerDate: {
        $gte: new Date(`${date}-01-01T00:00:00.000Z`),
        $lt: new Date(`${(parseInt(date) + 1).toString()}-01-01T00:00:00.000Z`),
      },
      category: category,
    });
  const results = await cursor.toArray();
  return results;
};

exports.fetchMembersInterestsByIdAndCategory = async (memberId, category) => {
  console.log("IN MODEL");
  console.log(memberId, category);

  const cursor = await connection
    .db("registered_interests")
    .collection("interests_production")
    .find({
      memberId: new ObjectId(memberId),
      category: category,
    });
  const results = await cursor.toArray();
  return results;
};

exports.patchClick = async (memberId) => {
  console.log("IN PATCH CLICK MODEL");
  try {
    const cursor = await connection
      .db("registered_interests")
      .collection("members_production")
      .updateOne({ _id: new ObjectId(memberId) }, { $inc: { numberOfClicks: 1 } }, false, true);

    const results = await cursor;
    return results;
  } catch (e) {
    console.error(e);
  }
};
