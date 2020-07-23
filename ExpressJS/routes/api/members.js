const express = require("express");
const router = express.Router();
const members = require("../../Members");
const uuid = require("uuid");

// Get all members
router.get("/", (req, res) => res.json(members));
// Get single members
router.get("/:id", (req, res) => {
  //   res.send(req.params.id);
  const found = members.some((member) => member.id == req.params.id);
  if (found) {
    res.json(members.filter((member) => member.id == req.params.id));
  } else {
    res.status(400).json({ msg: `Member ID:${req.params.id} not found` });
  }
});

// Create a member
/* 
Even if we are using the same route of '/' above in the get request part,
Since we are sending a post request below, we can use the same route for it too
*/
router.post("/", (req, res) => {
  //   res.send(req.body);
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include name and email" });
  }
  members.push(newMember);
  // res.json(members);
  res.redirect("/");
});

// Put Request
router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id == req.params.id);

  if (found) {
    const updateMember = req.body;
    members.forEach((member) => {
      if (member.id == req.params.id) {
        member.name = updateMember.name ? updateMember.name : member.name;
        member.email = updateMember.email ? updateMember.email : member.email;

        res.json({ msg: "Member updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `Member ID:${req.params.id} not found` });
  }
});
// Delete Member
router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id == req.params.id);

  if (found) {
    res.json({
      msg: "Member Deleted",
      members: members.filter((member) => member.id != req.params.id),
    });
  } else {
    res.status(400).json({ msg: `No member with id:${req.params.id}` });
  }
});

module.exports = router;
