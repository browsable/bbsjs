function Graph(){
    this.isWeighted=false;
    this.nodes=[]
    this.addNode=addNode;
    this.removeNode=removeNode;
    this.nodeExist=nodeExist;
    this.getAllNodes=getAllNodes;
    function addNode(Name){
        temp=new Node(Name);
        this.nodes.push(temp);
        return temp;
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
    function nodeExist(Name){
        index=this.nodes.indexOf(Name);
        if(index>-1){
            return true;
        }
        return false;
    }

    function getAllNodes(){
        return this.nodes;
    }

    function getBFSTravaersal(){

    }

    function getBFSTravaersal(){

    }

    function getBFSTravaersal(){

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
        adjList=v.adjList;
        console.log(v);
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
