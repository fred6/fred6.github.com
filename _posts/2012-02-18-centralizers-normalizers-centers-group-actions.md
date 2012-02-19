---
layout: default
title: centralizers, normalizers, centers and group actions
---

Here are some definitions you can make about a group $G$ that are often useful:

The **centralizer** of any subset $A$ of $G$ is the set of group elements that commute with every element of $A$:

$$C_G(A) = \{ g \in G : \forall a \in A \ ga = ag \}$$

A closely related definition is the **normalizer** of a set A, defined as the set of group elements for which the set of all [conjugates][conjugate_wiki] of elements of $A$ is equal to A:

$$N_G(A) = \{ g \in G : gAg^{-1} = A \}$$

where $gAg^{-1} = \{ gag^{-1} : a \in G \}$

Finally, the **center** of a group is the set of elements that commutes with *every* element of $G$. In other words, the center of $G$ is the centralizer of the set $G$.

# Group actions

You can prove that these three things are subgroups just by checking the definitions, but there's a pretty neat other way to do it using [group actions][group_action_wiki]. First let's define a group action.

A **group action** of $G$ on a set $S$ is a function $\cdot: G \times S \to S$ which satisfies these two properties:

 - $gh \cdot s = g \cdot (h \cdot s)$ for all $g, h \in G$
 - $1 \cdot s = s$

The *stabilizer* of an element $s \in S$ is the set of group elements for which the action fixes $s$:

$$G_s = \{ g \in G : g \cdot s = s \}$$

It's not hard to see that this is a subgroup: if $g, h$ are in $G_s$, then $gh \cdot s = g \cdot (h \cdot s) = g \cdot s = s$, so it's closed; the identity element clearly belongs; and for any $g \in G_s$, $s = 1 \cdot s = g^{-1} g \cdot s = g^{-1} \cdot (g \cdot s) = g^{-1} \cdot s$, so $g^{-1} \in G_s$.

The **kernel** of a group action is the set of group elements which fixes *every* element of $S$ under the action:

$$ker(\cdot) = \{g \in G : \forall s \in S \ g \cdot s = s \}$$

The kernel is the intersection of all the stabilizers of elements in $S$. With this perspective, it's easy to see why the kernel must be a subgroup: if $g, h$ are in the kernel, they're also in every stabilizer. But each stabilizer is a subgroup, so it's closed ($gh$ is in the stabilizer also). But this is true for every stabilizer, so $gh$ is in the kernel also. Similarly, the unit is in the kernel, as are the inverses of any element. It all follows from the fact that stabilizers are subgroups.

# Bringing it together

Now, if you take $G$ and define an action on the power set $\mathcal(P)(G)$ by conjugation, which takes $(g, B) \mapsto gBg^{-1}$, the stabilizer of any subset $A$ of $G$ under this action is exactly the normalizer of $A$:

$$G_A = \{ g \in G : gAg^{-1} = A \} = N_G(A)$$

The stabilizer is a subgroup, as we proved above, so we can take this group and define a new group action $\ast: G_A \times A \to A$ by $(g,a) \mapsto gag^{-1}$. Now we can prove that the kernel of this group action is the centralizer of $A$:

$$ker(\ast) = \{g \in G : \forall a \in A \ gag^{-1} = a \} = \{ g \in G : \forall a \in A \ ga = ag \} = C_G(A)$$

Since the centralizer and normalizer of sets are just the stabilizer and kernel of certain group actions, it follows from the stabilizer and kernel being subgroups that the centralizer and normalizer are subgroups.

# Addendum
Stashing a quick proof here that $gAg^{-1} = A$ iff $gA = Ag$:

$( \Rightarrow )$ Supposing $gAg^{-1} = A, this means that every element of the g-conjugate of A is also in A, and that every element of $A$ is in the g-conjugate of A. So for $x = ga \in gA$, $gag^{-1}$ is an element of the g-conjugate of A. This element is also in A (by assumption), so that $gag^{-1} = b$ where $b$ is in $A$. But this implies $ga = bg = x$, so $x$ is in $Ag$. This proves $gA \cup Ag$. But if $x = cg \in Ag$, $c$ is an element of $A$, so there's some $d \in A$ such that $gdg^{-1} = c$, which implies that $gd = cg = x$. That is, $x \in gA$ and $Ag \cup gA$. This establishes $gA = Ag$.


$( \Leftarrow )$ The converse is proved in exactly the same way.

[conjugate_wiki]: http://en.wikipedia.org/wiki/Conjugation_(group_theory)
[group_action_wiki]: http://en.wikipedia.org/wiki/Group_action
