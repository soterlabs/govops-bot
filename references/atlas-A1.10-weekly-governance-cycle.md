# A.1.10 - Weekly Governance Cycle [Article]

> Extracted from "A.1 - The Governance Scope" (Atlas).
> Only section A.1.10 is reproduced here.

---

This Article regulates the Weekly Governance Cycle which comprises two distinct subsets, the Operational Weekly Cycle and the Atlas Edit Weekly Cycle.

## A.1.10.1 - Operational Weekly Cycle [Section]

This Section defines the Operational Weekly Cycle, a predictable weekly framework for recurring operational decisions. The Operational Weekly Cycle is implemented via Governance Polls and Executive Votes. The Cycle complements the Monthly Governance Cycle by enabling recurring weekly decisions to be made that require quicker action than is allowed by the Monthly Governance Cycle.

### A.1.10.1.1 - Edits To The Atlas [Core]

The Operational Weekly Cycle may be used to edit the Atlas only if the pertinent Atlas document specifies that it, or a related unit of governance logic which it expressly controls, is modifiable through the Operational Weekly Cycle.

The general rule is that an Operational Weekly Cycle proposal requires a Governance Poll followed by an Executive Vote. The general rule, by default, is assumed wherever the Atlas provides that a document, or a unit of governance logic controlled by said document, is modifiable through the Operational Weekly Cycle.

Any exception to the general rule must be specifically stated in the pertinent Atlas document. The possible exceptions include documents that can be modified subject to a Governance Poll only; and documents that can be modified subject to an Executive Vote only, without requiring a previous Governance Poll.

### A.1.10.1.2 - Definitions [Core]

The subdocuments herein contain essential definitions pertinent to the Operational Weekly Cycle.

#### A.1.10.1.2.1 - Definition Of Weekly Poll [Core]

A Weekly Poll ("Governance Poll" or "Poll") is a non-binding poll that determines the bi-weekly Executive Vote contents. In this context, a non-binding weekly poll refers to the fact that a weekly poll cannot change the system parameters independently; it merely dictates what will be included in the next Executive Vote.

Governance Polls occur on-chain and are used to measure the sentiment of SKY voters. Polls often run concurrently, allowing voters to participate in any number of them at the same time. Polls may have different formats like Binary Voting, Instant Run-Off Voting, or Approval Voting depending on the topic. The voting period of a given Governance Poll varies; the most common are three (3) and fourteen (14) day periods. Concurrently-posted polls do not necessarily have the same voting periods.

#### A.1.10.1.2.2 - Definition Of Executive Vote [Core]

An Executive Vote (also "Executive") is a formalized governance proposal that requires on-chain voting. Through the Executive Vote mechanism, SKY holders steward Sky Governance by voting on Executive proposals that pertain to operations maintaining the Protocol. Executive Votes execute technical changes to the Sky Protocol.

The Executive Vote occurs approximately every two weeks. Its contents are often determined by weekly Governance Polls that pre-approve the inclusion of proposals in the Executive Vote. However, the Atlas can explicitly authorize proposals to go directly to an Executive Vote.

Note that the terms 'Executive' and 'spell' are distinct concepts.

The term 'Executive' or 'Executive Vote' is used in all instances where the formal governance vote is being referenced. The term 'Executive Process' refers to the end-to-end process of the development of an Executive Vote, in which Facilitators, spell teams (also referred to collectively as the "Governance Security Engineering Team") and other recognized Ecosystem Actors participate.

The term 'spell' refers to the smart contract that executes the changes to the protocol approved by Sky Governance in an Executive Vote. Generally, when referring to spell team operations and their technical outcome or product (including code base, code operations, code reviews and code quality), the term 'spell' will be used.

The term 'spell process' refers to the end-to-end process of developing a spell, a process in which the Core Facilitator and the current spell team participate. The term 'spell development process' is a subset of the 'spell process' and pertains solely to the technical development of the spell by the current spell team.

### A.1.10.1.3 - Full Cycle Breakdown [Core]

Every Monday, the Operational Weekly Cycle begins. It implements standard recurring operational decisions, proposed in the form of polls.

Operational Weekly Cycle proposals ("proposals") can be proposed by Facilitators and recognized Ecosystem Actors. The proposals should be posted to the Sky Forum by Friday at 8:00 am UTC to ensure the Core Facilitator has sufficient time to prepare the needed polls for the following Monday.

After confirming that the proposer has the authority to request a poll, the Facilitator must post an explicit approval of the poll request as a reply to the proposer's Forum thread. The Core Facilitator must then prepare and publish the Governance Poll.

The Operational Weekly Cycle polls run for three days.

The outcome of the polls determines the contents of the upcoming Executive Vote.

The Core Facilitator confirm the Executive Vote contents and deliver the Executive Sheet to the spell team. The spell team prepares and reviews the Mainnet spell. The spell team deploys the Mainnet spell; and then creates and reviews a Mainnet fork.

The Core Facilitator add the Executive Vote to the Voting Portal and communicate this to the Sky Ecosystem community. The Executive Vote has an expiration of thirty (30) days; if an Executive proposal does not pass within this timeframe, it expires and can no longer have any effect on the Sky Protocol.

#### A.1.10.1.3 — Annotations

**Executive Sheet**: The Executive Sheet refers to a Google Sheets document located at <https://docs.google.com/spreadsheets/d/1w_z5WpqxzwreCcaveB2Ye1PP5B8QAHDglzyxKHG3CHw/edit?gid=1593813984#gid=1593813984>. The Executive Sheet contains a list of content which is planned to be included in a given spell. The Executive Sheet is prepared by the Core Facilitator.

**Operational Weekly Cycle**: Previously, the "Operational Weekly Cycle" was called simply the "Weekly Governance Cycle." With the introduction of the Atlas Edit Weekly Cycle, it became necessary to divide the Weekly Governance Cycle into two (2) subtypes: the Atlas Edit Weekly Cycle and the Operational Weekly Cycle. These two subtypes differ in terms of the permissioned parties authorized to trigger a proposal and the governance mechanisms involved. For instance, the Atlas Edit Weekly Cycle implements edits to the Atlas via the mechanism of a Governance Poll only. The Operational Weekly Cycle can action changes to the Protocol that require Atlas edits, and generally requires both a Governance Poll and an Executive Vote.

**Upcoming Executive Vote**: Successfully polled changes to the Sky Protocol are included in an Executive Vote that is typically conducted within approximately 30 days of the poll passing. The exact timing is dependent on the decisions made by the Core Facilitator and the spell teams.

### A.1.10.1.4 - Executive Vote Contingencies [Core]

The subdocuments herein define contingencies related to Executive Votes.

#### A.1.10.1.4.1 - Executive Vote Cadence [Core]

The Executive Vote occurs approximately every two weeks, although this cadence can vary based on decisions made by the Core Facilitator and the current spell team.

> **Current Spell Team**: The element "current spell team" refers to the group of people who are presently working on a given spell. Members of the spell team may perform a crafter role or a reviewer role. The "current spell team" does not include the "spell roster", which latter is defined as the group of people from which spell team members for a given spell are selected.

#### A.1.10.1.4.2 - Postponement Of Executive Vote [Core]

A scheduled Executive Vote can be postponed if deemed necessary by the Core Facilitator and the current spell team.

#### A.1.10.1.4.3 - Additional Executive Votes [Core]

Additional Executive Votes outside the regular schedule may be introduced if deemed necessary by the Core Facilitator and the current spell team.

#### A.1.10.1.4.4 - Decision To Not Publish Executive Vote [Core]

If there are no substantive changes due to be made to the Sky Protocol, the Core Facilitator, in conjunction with the spell teams, may opt not to publish an Executive Vote. This decision should be announced and justified on the Sky Forum.

> **Spell Teams**: The element "spell teams" indicates that the entire spell roster can participate in the decision described in the Target Document. The spell roster is defined as all spell team members authorized to perform spell crafting and spell reviewing services for Sky Core.

### A.1.10.1.5 - Core Facilitators' Authority To Create Proposals [Core]

The Core Facilitator may create proposals using the Weekly Governance Cycle to enable them to fulfill their responsibilities.

#### A.1.10.1.5.1 - Core Facilitators' Role In Adding Housekeeping Items In Executive Votes [Core]

The Core Facilitator is authorized to add housekeeping items in an Executive Vote. The Core Facilitator can propose housekeeping items of their own accord; or, they can do so in consultation with the spell teams.

Where housekeeping items are proposed by the spell teams, the Core Facilitator must always conduct an independent assessment of the justification for, and security risks associated with, the housekeeping items.

**Definition Of Housekeeping Items**: Housekeeping items are defined as maintenance and record-keeping actions necessary to the correct functionality of the Sky Protocol. Housekeeping items do not include actions that modify risk parameters or introduce new elements into the protocol. Examples include (1) cleaning up technical debt, (2) updating the Chainlog, and (3) cancelling payment streams that are no longer used.

**Process for Adding Housekeeping Item In Executive Vote**: Housekeeping items can be directly included in Executive Votes without a Governance Poll through the following process. The Core Facilitator must first create a post on the Sky Forum detailing the housekeeping items and the rationale for their inclusion. The Core Facilitator must request a confirmation of the technical accuracy of the housekeeping items from the technical Ecosystem Actor (or spell team) who is leading spell development for the pertinent Executive Vote. The Technical Ecosystem Actor (spell team) must reply to the Forum Post confirming the accuracy of the housekeeping item.

## A.1.10.2 - Atlas Edit Weekly Cycle [Section]

This Section defines the Atlas Edit Weekly Cycle which provides a predictable framework for weekly edits to the Atlas. The Atlas Edit Weekly Cycle is implemented via Governance Polls.

### A.1.10.2.1 - Cycle Breakdown [Core]

#### A.1.10.2.1.1 - Proposals In General [Core]

In the transition to Endgame, the Atlas can be edited through the submission of an Atlas Edit Weekly Cycle Proposal (also "Weekly Cycle Proposal" or "Proposal"). Multiple amendments to multiple components of the Atlas are allowed to be submitted in a single Weekly Cycle Proposal. A single Weekly Cycle Proposal may seek to remove multiple components of the Atlas.

Atlas Edits must always adhere to the Spirit of the Atlas and remain within the bounds of Universal Alignment.

#### A.1.10.2.1.2 - Origination Via Forum Post [Core]

The Author of an Atlas Edit Weekly Cycle Proposal must post the Proposal in the Sky Forum in the appropriate category and signal their intent to submit the Proposal to the Weekly Cycle.

#### A.1.10.2.1.3 - Triggering Requirement [Core]

An Atlas Edit Weekly Cycle Proposal can proceed to a vote only if it is triggered by a Ranked Delegate whose AD Buffer contains at least the Triggering Threshold at the time of triggering the Proposal. The Core Facilitator is responsible for confirming that these requirements are met.

A Ranked Delegate may trigger a Proposal they authored, provided they meet the Triggering Threshold. To trigger a Proposal, the Ranked Delegate must post a reply to the Author's Weekly Cycle Proposal on the Forum.

Where more than one Ranked Delegate posts an intention to trigger a Weekly Cycle Proposal, the first Ranked Delegate to post a reply to the Author's Forum post shall be treated as the triggering Ranked Delegate.

If the Weekly Cycle Proposal is subsequently voted down, the triggering Ranked Delegate loses an amount of USDS from their AD Buffer equal to the Triggering Threshold.

### A.1.10.2.2 - Preparation And Publication of Governance Poll [Core]

An Atlas Edit Weekly Cycle Proposal should be posted to the Forum by Friday at 8:00 am UTC to ensure the Core Facilitator has sufficient time to prepare the needed polls for the following Monday.

Every Monday, the Atlas Edit Weekly Cycle is carried out via Governance Polls. The Core Facilitator must publish the set of Governance Polls to the community Github and the official Voting Portal.

The Polls run for three days. Successful polls trigger direct edits to the Atlas.

### A.1.10.2.3 - Rejecting A Proposal For Misalignment [Core]

The Core Facilitator can reject an Atlas Edit Weekly Cycle Proposal if they deem it to be misaligned. If the Facilitator rejects an Atlas Edit Weekly Cycle Proposal for misalignment, the Ranked Delegate who triggered the poll loses their AD buffer.

### A.1.10.2.4 - Minimum Positive Participation [Core]

Atlas Edit Weekly Cycle Proposals must have at least 480,000,000 SKY equivalents of Yes votes to be accepted.

### A.1.10.2.5 - Reconciliation Process [Core]

If multiple Atlas Edit Weekly Cycle Proposals editing the same component of the Atlas are approved by voters in the same Governance Cycle, the Reconciliation Process documented herein must be followed.

Atlas Edit Weekly Cycle Proposals cannot include language that aims to prevent other Atlas Edit Weekly Cycle Proposals from editing the same component of the Atlas within the same Governance Cycle.

Where simultaneous edits are non-conflicting / logically compatible: the Core Facilitator will consolidate them into a single edit.

Where simultaneous edits are conflicting / logically incompatible and cannot be coherently reconciled: it falls to voters to decide which of the conflicting Atlas Edit Weekly Cycle Proposals they wish to accept.

A Reconciliation Process Poll will take place during the Operational Weekly Cycle immediately following the closure of the originating polls. The Reconciliation Process Poll will last for three days.
