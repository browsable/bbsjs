function Graph(){
    this.isWeighted=false;
    this.nodes=[];
    this.nodeNames=[];
    this.addNode=addNode;
    this.removeNode=removeNode;
    this.removeAll = removeAll;
    this.nodeExist=nodeExist;
    this.getAllNodes=getAllNodes;
    this.getNode=getNode;
    function addNode(Node){
       this.nodes.push(Node);
        this.nodeNames.push(Node.name);
    }
    function removeNode(Name){

        index=this.nodes.indexOf(Name);
        if(index>-1){
            this.nodes.splice(index,1);
            len=this.nodes.length;

            for (var i = 0; i < len; i++) {
                if(this.nodes[i].adjList.indexOf(Name)>-1){
                    this.nodes[i].adjList.slice(this.nodes[i].adjList.indexOf(Name));
                    this.nodes[i].weight.slice(this.nodes[i].adjList.indexOf(Name));
                }
            }
        }

    }
    function removeAll(){
                this.nodes=new Array();
                this.nodeNames=new Array();
    }
    function nodeExist(Name){
        index=this.nodeNames.indexOf(Name);
        if(index>-1){
            return true;
        }
        return false;
    }
    function getNode(Name){
        var tmp;
        for(var a in this.getAllNodes()){
             if(Name==this.nodes[a].name){
                tmp=this.nodes[a];
            }
        }
        return tmp;
    }

    function getAllNodes(){
        return this.nodes;
    }

}

function Node(Name){
    this.name=Name;
    this.adjList=[];
    this.weight=[];
    this.addEdge=addEdge;
    this.compare=compare;
    function addEdge(neighbour,weight){
        this.adjList.push(neighbour);
        this.weight.push(weight);
    }

    function getAdjList(){
        return adjList;
    }
    function compare(node2){
        return this.weight-node2.weight;
    }
}

function dfs(graph){
    ans=[];
    traversedNodes=[];
    traversedNodes.push(graph.nodes[0]);
    allNodes=graph.getAllNodes();
    marked={};
    while(traversedNodes.length!=0){
        var v=traversedNodes.pop();
        marked[v.name]=true;
        //console.log(v.name);
        adjList= v.adjList;
        //console.log(adjList[0]);
        ans.push(v);
        for (var i=0;i<adjList.length;i++){
            u=adjList[i];
            if(marked[u.name]!=true){
                traversedNodes.push(u);
                marked[u.name]=true;
            }
        }
    }
    return ans;
}
